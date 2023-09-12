import { createContext, useState, useContext } from 'react';

const PanelContext = createContext(
    {
        // addOfferMessage: null,
        // deleteOfferMessage: null,
        updateOfferMessage: null,
        // addOffer: () => { },
        // deleteOffer: () => { },
        updateOffer: () => { },
        // addRequestMessage: null,
        // deleteRequestMessage: null,
        // updateRequestMessage: null,
        // addRequest: () => { },
        // deleteRequest: () => { },
        // updateRequest: () => { },
    });


export default function PanelContextProvider({ children }) {

    const [setOffer] = useState(null);
    const [updateOfferMessage, setUpdateOfferMessage] = useState(null);

    // const [addOfferMessage, setAddOfferMessage] = useState(null);
    // const [deleteOfferMessage, setDeleteOfferMessage] = useState(null);
    // const [addRequestMessage, setAddRequestMessage] = useState(null);
    // const [deleteRequestMessage, setDeleteRequestMessage] = useState(null);
    // const [updateRequestMessage, setUpdateRequestMessage] = useState(null);


    // setTimeout(() => {
    //     setAddOfferMessage(null)
    // }, 3000)

    setTimeout(() => {
        setUpdateOfferMessage(null)
    }, 3000)


    // setTimeout(() => {
    //     setDeleteOfferMessage(null)
    // }, 3000)

    // setTimeout(() => {
    //     setAddRequestMessage(null)
    // }, 3000)

    // setTimeout(() => {
    //     setUpdateRequestMessage(null)
    // }, 3000)


    // setTimeout(() => {
    //     setDeleteRequestMessage(null)
    // }, 3000)

    async function updateOffer(id) {

        const response = await fetch(
            `http://localhost:3006/offers/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        if (response.ok) {
            setOffer(await response.json())
            setUpdateOfferMessage("Oferta actualizada!")
        } else {
            setUpdateOfferMessage("Inténtalo de nuevo.")
        }
    }


    // useEffect(function () {
    //     async function deleteOffer(id) {
    //         try {
    //             const response = await fetch(`http://localhost:3006/offers/${id}`, {
    //                 method: "DELETE",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //             })
    //             if (response.ok) {
    //                 setDeleteOfferMessage(await response.json())
    //             }
    //         }
    //         catch (err) {
    //             throw new Error(err)
    //         }
    //     }
    //     deleteOffer()
    // },
    //     []
    // )




    const value = {
        updateOffer, updateOfferMessage
        // addOffer, addOfferMessage , 
        // deleteOfferMessage, deleteOffer, 
        // addRequestMessage, deleteRequestMessage, 
        // request, updateRequestMessage
    };

    return (
        <PanelContext.Provider value={value}>{children}</PanelContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePanelContext() {
    return useContext(PanelContext);
}