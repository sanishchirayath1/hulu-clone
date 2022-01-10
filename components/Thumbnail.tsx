import ThumbnailStyle from '../styles/Thumbnail.module.scss'
import { ThumbUpIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { forwardRef } from 'react'

const Thumbnail = forwardRef(({ result }, ref) => {
    return (
        <div ref={ref} className={ThumbnailStyle.container}>
            <Image 
                layout="responsive"
                src={`https://image.tmdb.org/t/p/original${result.backdrop_path || result.poster_path}`}
                alt={result.title || result.name || result.original_name || result.original_title || "thumbnail image"} 
                height={108}
                width={192}
            />
            <div className={ThumbnailStyle.details}>
                <p>{result.overview}</p>
                <h3>{result.title || result.name || result.original_name || result.original_title || "title"}</h3> 
                <p className={ThumbnailStyle.hoverPara}>
                    {result.media_type && `${result.media_type} • `}{" "}{result.release_date || result.first_air_date || "release date"}{" "}•{" "}
                <ThumbUpIcon height={"1rem"} width={"1rem"} /> {result.vote_count}
                </p>
                
                
            </div>

        </div>
    )
})

export default Thumbnail
