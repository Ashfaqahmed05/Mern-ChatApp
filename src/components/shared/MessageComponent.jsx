import { Box, Typography } from '@mui/material';
import moment from 'moment';
import React from 'react'
import { fileFormat } from '../../lib/features';
import RenderAttachment from './RenderAttachment';

const MessageComponent = ({message, user}) => {

    const {sender, content, attachments = [], createdAt} = message

    const sameSender = sender?._id === user?._id;

    const timeAgo = moment(createdAt).fromNow();

  return (
    <div 
    style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        background: "white",
        color:"black",
        borderRadius:"5px",
        padding: "0.5rem",
        width: "fit-content",
    }}>
        {
            !sameSender && <Typography color={"green"} fontWeight={600} >{sender?.name}</Typography>
        }
        {content && <Typography>{content}</Typography>}

{attachments?.length > 0 && attachments.map((attachment, index) =>{
const url = attachment.url
const file = fileFormat(url)

return <Box key={index}>
    <a href={url}
    target='_blank'
    download
    style={{
        color: "black"
    }}
    >{RenderAttachment(file, url)}</a>

</Box>

})}
        <Typography varient="caption" color={"text.secondary"}>{timeAgo}</Typography>
    </div>
  )
}

export default MessageComponent