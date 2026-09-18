import React from "react";

export const Steps = () => {
  return (
    <section className="flex w-full bg-linear-to-b from-third/15 via-third/10 to-transparent px-3 py-12">
      <div className="flex w-full justify-center max-w-6xl gap-10 flex-wrap">
        <div className="flex w-75 h-40 flex-col rounded-xl border border-third/10 bg-third/5 p-4 text-left">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary">
            Talento
          </p>
          <p className="mt-2 flex flex-1 items-center text-xl font-semibold text-third">
            Publica tu perfil real
          </p>
        </div>

        <div className="flex w-75 h-40 flex-col rounded-xl border border-third/10 bg-third/5 p-4 text-left">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary">
            Empresas
          </p>
          <p className="mt-2 flex flex-1 items-center text-xl font-semibold text-third">
            Encuentra perfiles que encajen
          </p>
        </div>

        <div className="flex w-75 h-40 flex-col rounded-xl border border-third/10 bg-third/5 p-4 text-left">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary">
            Comunidad
          </p>
          <p className="mt-2 flex flex-1 items-center text-xl font-semibold text-third">
            Networking y torneos reales
          </p>
        </div>
      </div>
    </section>
  );
};
