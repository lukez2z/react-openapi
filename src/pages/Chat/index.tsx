import React from 'react';
import ChatProvider from './Chat.provider';
import { ChatMain } from './ChatMain';

export const Chat: React.FC = () => (
    <ChatProvider>
        <ChatMain />
    </ChatProvider>
);