---
id: settypeforcomponent
title: Set type for component
sidebar_position: 10
tags: [nextjs, typescript, set type for component]
---

> Chỉ định nghĩa `type props` cho các `component con`

```tsx
type AppProps = {
    isUser: boolean;
};

const MyAppChild: React.FC<AppProps> = ({ isUser }) => {
    return <p>{isUser && 'OK'}</p>;
};
// Function component
export default function MyAppChild({ isUser }: AppProps) {
    return <p>{isUser && 'OK'}</p>;
}
// Class component
export default class MyAppChild extends React.Component<AppProps> {
    render() {
        return <p>{this.props.isUser && 'OK'}</p>;
    }
}
```

> `src/app/MyAppParent.tsx`

```tsx
import MyAppChild from './MyAppChild';
const MyAppParent: React.FC = () => {
    return (
        <>
            <MyAppChild isUser={true} />
        </>
    );
};
```
