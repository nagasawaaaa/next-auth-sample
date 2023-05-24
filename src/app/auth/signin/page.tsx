'use client';
import { getProviders, signIn } from 'next-auth/react';
const SingInPage = async () => {
  const providers = await fetchProviders();

  return (
    <>
      <p>SignIn</p>

      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.id}>
            <button
              onClick={() => signIn(provider.id)}
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
            >
              <span className="text-2xl">Sign in with {provider.name}</span>
            </button>
          </div>
        ))}
    </>
  );
};

const fetchProviders = async () => {
  const providers = await getProviders();
  return providers;
};

export default SingInPage;
