import NavBarLayout from "@/components/layout/NavBarLayout";
import React from 'react';
import "../../styles/globals.css";
import Image from 'next/image';
import Link from 'next/link';
import { poppins } from '@/fonts/fonts';

const Telemedicina = () => {
    return (
        <NavBarLayout>

            <div>
                <h1>Especialidades</h1>

            </div>

            {/* Cards das especialidades */}
            <div>

                  <div className="top-0">
                <img className="h-[150px] w-[150px]" src="/img/ginecologista.png" alt="Logo" />
                <h1>Ginecologista</h1>
            </div>

            </div>

          




        </NavBarLayout>
    )
}

export default Telemedicina;