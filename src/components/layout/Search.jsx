function SearchBar() {
    return (
    <>
        <div className="relative flex-grow">
            <input className="w-full  h-10 text-white  text-base p-4 pr-10 bg-[#2f3437] rounded-4xl focus:outline-none flex flex-wrap" type="text" placeholder="Search" />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7.25" stroke="white" strokeWidth="1.5"></circle>
                <path d="M13.5 13.5L17.5 17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
            </button>
        </div>
    </>
    );
}
export default SearchBar // Export SearchBar as a named export