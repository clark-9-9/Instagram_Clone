import { useState, useEffect, useContext } from "react";
import { Icons } from "../../data/icons";
import { Users } from "../../data/Users"
import { SideBarContext } from "../../Context/Side_Bar";
import { Searched_Users_Props } from "../../Data_Types/Side_Bar_Components";


function Search() {

    const[inputSearch, setInputSearch] = useState<string>("");
    const{ screenWidth, searchBoxMarginAndState } = useContext(SideBarContext);
    const{ searchBoxMargin, setSearchBoxMargin } = searchBoxMarginAndState;



    useEffect(() => {
        const searchBox = document.querySelector(".Search_Box") as HTMLElement;
        
        if(screenWidth < 768) {
            searchBox.style.visibility = "hidden"
            setSearchBoxMargin("-100%");
        } else {
            searchBox.style.visibility = "visible"
            setSearchBoxMargin("-25rem");
        }
    }, [screenWidth])

    
    
    return (
        <section 
            className="Search_Box"
            style={{ 
                marginLeft: searchBoxMargin,
            }}
        >

            <article className="Top_Search">
                <p>Search</p>
                
                <div className="Input_Search_Box">
                    <input 
                        type="text" 
                        className="Input_Search"
                        placeholder="Search" 
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                    />

                    {Icons("close_search", undefined, () => setInputSearch("")).close}
                </div>  
            </article>

            <article className="Searhed_Article">
                <div className="Recent_ClearAll_Texts">
                    <p>Recent</p>
                    <p>Clear all</p>
                </div>

                <Searched_Users 
                    inputSearch={inputSearch}
                />
            </article>

        </section>
    )
}





function Searched_Users({ inputSearch }: Searched_Users_Props) {

    // const filteredUsers = Users.filter((user) => {
    //     return user.name.includes(inputSearch);
    // });

    
    return (
         <section className="Searched_Users">
            {
                Users.map((user, i) => {
                    if(user.name.toLowerCase().includes(inputSearch.toLowerCase())) {
                        if(inputSearch.length !== 0) {
                            return (
                                <article key={i} className="User">
                                    <img 
                                        src={user.img} 
                                        className="User_Image"
                                    /> 

                                    <div className="User_Names">
                                        <p>{user.name}</p>
                                        <p>{user.user_name} . {user.followers}</p>
                                    </div>
                                </article>
                            )
                        }
                    }
                })
            }
        </section>
    )
}




export { Search };


