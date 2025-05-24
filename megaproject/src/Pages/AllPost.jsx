import React, { useState, useEffect } from "react";
import appwritetService from "../Appwrite/config"
import { PostCard, Container } from "../Component";
function AllPost() {

    const [posts, setPosts] = useState([])
    useEffect(() => { }, [])
    appwritetService.getPost([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {
                        posts.map((post) => {
                            <div key={post.$id} className="p-2 w-1/4" >
                                <PostCard post={post} />
                            </div>
                        })
                    }
                </div>

            </Container>
        </div>
    )
}

export default AllPost;