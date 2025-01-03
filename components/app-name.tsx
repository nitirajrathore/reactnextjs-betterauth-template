
export const AppName = () => {
    return <p className="dark:text-white text-black uppercase">{process.env.NEXT_PUBLIC_APP_NAME}</p>;
};