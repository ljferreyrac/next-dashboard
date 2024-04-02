import { WidgetGrid } from "@/components";

export const metadata = {
 title: 'Admin Dashboard',
 description: 'Consectetur fugiat qui id et duis consequat sint.',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <h1 className="text-xl">General information</h1>
      <WidgetGrid/>
    </div>
  );
}