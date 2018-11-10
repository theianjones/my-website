import React from "react"
import {Link } from 'gatsby'
import Header from '../components/Header'
import {H2, Body} from '../styles/StyledComponents'

const singleTagsTemplate = ({data, pageContext}) => {
    const { posts, tagName} = pageContext
    return (
    <div>
    <Header />
    <Body>
            <H2>
                Posts about { `${tagName}`}
            </H2>
            <div>
                <ul>
                    {posts.map((post, index) => {
                        return ( 
                            <li key={index}>
                                <Link to={post.frontmatter.path}>
                                    {post.frontmatter.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Body>
        </div>
    )
}
export default singleTagsTemplate