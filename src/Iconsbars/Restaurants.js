import React from 'react';
import Iframe from '../componenets/Actiities/Iframe';
import { Icon } from '../componenets/Actiities/Icon';
import { Activitybar } from '../componenets/Actiities/Activitybar';

export const Restaurants = () => {
  return (
    <div>
    <Iframe location={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15123.457136164121!2d73.7172578078125!3d18.62517310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb9994e1c7eb%3A0x30e87709fef1acde!2sPanjabi%20Tadka!5e0!3m2!1sen!2sin!4v1658594707463!5m2!1sen!2sin"}/>
    <Icon/>
    <Activitybar />
    </div>
    )
}