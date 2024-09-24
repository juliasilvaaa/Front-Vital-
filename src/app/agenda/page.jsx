import NavBarLayout from "@/components/layout/NavBarLayout";
import Image from "next/image"; // Ajuste o caminho conforme necessário

export default function Agenda() {
  return (
    <div className="flex">
      <NavBarLayout>
        <div className="flex-1 p-4">
          <h1>Estou na Agenda</h1>
          {/* Aqui você pode adicionar mais conteúdo */}
        </div>
      </NavBarLayout>
    </div>
  );
}