"use client";

import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="text-white font-medium">
      Te damos la bienvenida a StockMovil <span className="font-bold">{session?.user?.email}</span>
    </div>
  );
}
