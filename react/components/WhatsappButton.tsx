import React from 'react'
import propTypes from 'prop-types'

type Props = {
    logo: string    //Whatsapp.png
    phone: string   //3008675567
    message: string //Estás comunicándote con VTEX Mango, por favor ingresa tu duda.
    width: number   //80px
    height: number  //80px
}

const WhatsappButton = ({logo, phone, message, width, height}: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")
    console.log("Mi mensaje formateado es", formattedMessage, logo)
    return <>
        <div className="fixed bottom-2 right-2 flex flexColumn z-9999">
            <a
                href={`https://wa.me/${phone}?text=Me%20interesa%20in%20el%20auto%20que%20vendes`}
                target='_blank'
                rel='noreferrer noopener'
            >
                <img 
                    src={logo} 
                    width={width} 
                    height={height} 
                    alt='Logo de Whatsapp' 
                />
            </a>
        </div>
    </>
}

WhatsappButton.propTypes = {
    logo: propTypes.string.isRequired,
    phone: propTypes.string.isRequired,
    message: propTypes.string,
    width: propTypes.number,
    height: propTypes.number,
}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "3008675567",
    message: "Estás comunicándote con VTEX Mango, por favor ingresa tu duda.",
    width: 60,
    height: 60
}

WhatsappButton.schema = {
    title: "Botón de Whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de Whatsapp que se relacione con la marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Teléfono",
            description: "Agrega por favor el número de teléfono",
            type: "string"
        },
        message: {
            title: "Mensaje",
            description: "Agrega por favor el mensaje que verá tu cliente",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "Teléfono",
            description: "Agrega por favor el número de teléfono",
            type: "number"
        },
        heigth: {
            title: "Teléfono",
            description: "Agrega por favor el número de teléfono",
            type: "number"
        }
    }
}

export default WhatsappButton;