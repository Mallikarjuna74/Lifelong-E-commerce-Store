import SearchBar  from "./Search.jsx"
function Header() {
    return (
    <>
        <header>
            <div className="h-[80px] w-auto mx-0 px-4 py-4 flex justify-between items-center bg-black text-white border-b-[0.5px] border-#3a3a3a" >
                <div className="w-43 flex justify-start items-center gap-x-4" >
                    <img className="max-h-10 ml-20" src="/lifelong-logo.svg" alt="logo" />
                </div>
                <div className="w-[770px] h-[40px] flex justify-center items-center">
                    <SearchBar />
                </div>
                <div className="w-[136px] h-40 flex justify-end items-center gap-x-4 mr-20">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="9.5" cy="5.5" r="4.75" stroke="white" strokeWidth="1.5"></circle> <path d="M1 18V17C1 14.7909 2.79086 13 5 13H13C15.2091 13 17 14.7909 17 17V18" stroke="white" strokeWidth="1.5"></path> </svg>
                    <svg className="ml-10" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.65511 7.46172L8.66188 1.83103C8.89488 1.56912 9.17814 1.36 9.49371 1.21693C9.80927 1.07387 10.1502 1 10.495 1C10.8397 1 11.1806 1.07387 11.4962 1.21693C11.8118 1.36 12.095 1.56912 12.328 1.83103L17.3348 7.46172M19.9439 9.12451L17.2403 18.0987C17.1615 18.3599 17.0037 18.5883 16.79 18.7504C16.5764 18.9126 16.318 19 16.0526 19H5.00443C4.74046 19 4.48334 18.9134 4.27027 18.7528C4.05721 18.5921 3.89925 18.3658 3.81927 18.1064L1.05846 9.1322C0.999165 8.93994 0.984719 8.73597 1.0163 8.53687C1.04788 8.33777 1.12459 8.14917 1.24019 7.98639C1.3558 7.82361 1.50704 7.69126 1.68161 7.60009C1.85619 7.50892 2.04917 7.46151 2.24486 7.46172H18.755C18.95 7.46149 19.1424 7.50856 19.3165 7.59913C19.4907 7.6897 19.6417 7.82123 19.7575 7.98308C19.8732 8.14494 19.9503 8.33259 19.9827 8.53087C20.0151 8.72915 20.0018 8.93251 19.9439 9.12451Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
            </div>
        </header>
    </>
    );
}
export default Header  // Export Header as a named export