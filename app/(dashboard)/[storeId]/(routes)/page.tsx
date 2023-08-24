import prismadb from "@/lib/prismadb";
import React from "react";

interface DashboardPageProps {
  params: { userId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.userId,
    },
  });

  return (
    <div>
      <h1>Active store : {store?.name}</h1>
    </div>
  );
};

export default DashboardPage;
