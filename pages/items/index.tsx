import Item from 'components/ItemLists/Item';
import { useRouter } from 'next/router';
import React from 'react';

const Items = () => {
    const router = useRouter();
    const { pid } = router.query;
    console.log(router);
    return <Item conItemId={137} />;
};

export default Items;
