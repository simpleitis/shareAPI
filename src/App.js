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
    const shareButton = useRef()
    const [url, setUrl] = useState('none') // Unfortunately, we have to have a dummy string here, or FacebookShareButton will blow up.

    // Provide an onClick handler that asyncronously fetches the url and sets it in the state.
    const onClick = async () => {
        // Be sure to check for the "none" state, so we don't trigger an infinite loop.
        if (url === 'none') {
            const newUrl = await getUrFromService()
            setUrl(newUrl)
        }
    }

    // Whenever "url" changes and we re-render, we manually fire the click event on the button, and then re-set the url.
    useEffect(() => {
        if (url !== 'none') {
            shareButton.current?.click()
            setUrl('none')
        }
    }, [url, shareButton])

    return (
        <>
            <TwitterShareButton
                ref={shareButton}
                // Disable calling the dialog if we don't have a url yet.
                openShareDialogOnClick={url !== 'none'}
                url={url}
                onClick={onClick}
                image="https://via.placeholder.com/150"
            >
                <TwitterIcon />
            </TwitterShareButton>
            <WhatsappShareButton
                ref={shareButton}
                // Disable calling the dialog if we don't have a url yet.
                openShareDialogOnClick={url !== 'none'}
                url={url}
                onClick={onClick}
                itemRef=''
            >
                <WhatsappIcon />
            </WhatsappShareButton>
        </>
    )
}
