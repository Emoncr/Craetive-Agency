

const Loading = () => {
    return (
        <div className="fixed bg-white inset-0  flex items-center justify-center">
            <div className="loader w-16 h-16 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;