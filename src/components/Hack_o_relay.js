import React, { Fragment } from 'react';
import Hack_o_relay_Schedule from './Hack_o_relay_Schedule';
import Hack_o_relay_Tracks from "./Hack_o_relay_Tracks";
import Hack_o_relay_Sponsors from "./Hack_o_relay_Sponsors";
import Hack_o_relay_Header from './Hack_o_relay_Header';
import Hack_o_relay_Events from './Hack_o_relay_Events'
import Hack_o_relay_Prizes from './Hack_o_relay_Prizes';
import Hack_o_relay_MPrizes from './Hack_o_relay_MPrizes';

const Hack_o_relay = () => {
    return (
        <Fragment >
            <div className="covihack-page" style={{overflow:"hidden"}}>
            <Hack_o_relay_Header/>
            <Hack_o_relay_Schedule/>
            <Hack_o_relay_Events/>
            <Hack_o_relay_Tracks />
            <Hack_o_relay_MPrizes/>
            <Hack_o_relay_Prizes/>
            <Hack_o_relay_Sponsors />
            </div>
        </Fragment>
    )
}

export default Hack_o_relay
