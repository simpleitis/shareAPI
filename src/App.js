import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import {
    FacebookIcon,
    FacebookShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from 'react-share'

async function getUrFromService() {
    // The real implementation would make a network call here.
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return 'https://via.placeholder.com/150'
}

export default function App() {
    return (
        <>
            <Helmet>
                <title>Share app</title>
               <meta
                    property="og:image"
                    content="https://cdn.pixabay.com/photo/2015/03/10/17/23/youtube-667451_1280.png"
                />
            </Helmet>
            <TwitterShareButton url="https://share-api.vercel.app/">
                <TwitterIcon />
            </TwitterShareButton>
            <WhatsappShareButton url="https://share-api.vercel.app/">
                <WhatsappIcon />
            </WhatsappShareButton>
        </>
    )
}
