import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AvailableOrder from './AvailableOrder';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Order = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <h3>This is order page</h3>
            <div>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
                <p>You have selected: {format(date, 'PP')}</p>
            </div>
            <AvailableOrder></AvailableOrder>
            <Footer></Footer>
        </div>
    );
};

export default Order;