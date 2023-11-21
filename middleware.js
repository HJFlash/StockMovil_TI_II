export { default } from "next-auth/middleware";

export const config = { 
    matcher: ["/stock-user","/stock-admin","/stock-admin/new-user","/stock-admin/edit-user","/stock-user/add_product",
              "/stock-user/categories","/stock-user/edit_product","/stock-user/edit-perfil"] 
};//
