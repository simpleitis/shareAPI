import { useEffect, useRef, useState } from 'react'
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
            <TwitterShareButton url="https://share-api.vercel.app/">
                <TwitterIcon />
            </TwitterShareButton>
            <WhatsappShareButton url="https://share-api.vercel.app/">
                <WhatsappIcon />
            </WhatsappShareButton>
        </>
    )
}
