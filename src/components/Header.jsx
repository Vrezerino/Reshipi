import React from 'react';
import { useStateValue } from '../state';

import reshipi from '../../public/img/reshipi.png';

const Header = () => {
    const [{ notification }] = useStateValue();

    return (
        <>
            <div className='title'>Reshipi</div>
            <img src={reshipi} className='reshipi' /><br /><br />
            {notification && <div className='notification'>{notification}</div>}
        </>
    )
};

export default Header;