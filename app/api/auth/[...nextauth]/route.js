import { connectMongoDB } from "@/lib/mongodb";
import Usuario from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { usuario, password } = credentials;
        console.log(credentials)
        try {
          await connectMongoDB();
          const user = await Usuario.findOne({usuario});
          console.log(user)
          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log("aqui",passwordsMatch)
          if (passwordsMatch === false) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  callbacks:{//obtiene el objeto de la session
    async jwt ({token, user}) {
      return {...token, ...user};
  },
    async session ({session, token}) {
        session.user = token;
        return session;
    }
    },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
