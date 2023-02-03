import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';

const Notifications = () => {
    const [checkboxState, setCheckboxState] = useState(false);

    return (
        <div>
            <h1>Email notifications</h1>
            <p>Story recommendations</p>
            <div className='flex justify-between'>
                <div>
                <h1>FreeMium Digest</h1>
                <p>The best stories on FreeMium personalized based on your interests, as well as outstanding stories selected by our editors.</p>
                </div>
                <select className="select select-sm text-green-600">
  <option  selected>Daily</option>
  <option>Weekly</option>
  <option>Monthly</option>
</select>
            </div>
            {/* <div>
                <div>
                <h1>Recommended reading</h1>
                <p>Featured stories, columns, and collections that we think you’ll enjoy based on your reading history.</p>
                </div>
            </div> */}
{/* <div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text"><h1>Recommended reading</h1>
                <p>Featured stories, columns, and collections that we think you’ll enjoy based on your reading history.</p></span>
    <input type="checkbox" checked className="checkbox checkbox-success" />
  </label>
        </div> */}
        
              <Checkbox
        label="Recommended reading
                Featured stories, columns, and collections that we think you’ll enjoy based on your reading history."
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      /> 
            <div className="divider"></div>
              <h1>From writers and publications</h1>
              <Checkbox
        label="New stories from writers you’ve subscribed to"
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      /> 
              <Checkbox
        label="Digests from publications you follow"
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      /> 
              <Checkbox
        label="Newsletters from publications"
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      /> 
                          <div className="divider"></div>
              {/* <h1>Social activity</h1> */}
              <h1>For writers</h1>
              <Checkbox
        label="Notifications on your published stories"
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      /> 
              <Checkbox
        label="Notifications on your lists"
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      /> 
              <Checkbox
        label="From editors about featuring your stories"
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      /> 
              <div className="divider"></div>
              <h1>Others from FreeMium</h1>
              <Checkbox
        label="New product features from Medium"
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      /> 
              <Checkbox
        label="Information about Medium membership"
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      /> 
              <Checkbox
        label="Writing updates and announcements"
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      /> 
        <div className="divider"></div>
        
 <Checkbox
        label="Allow email notifications"
        checked={checkboxState}
        onChange={() => setCheckboxState(!checkboxState)}
      /> 
        <h1 className='text-lg font-bold'>Push notifications</h1>
        <p>Open the FreeMium app from your mobile device to make changes to push notifications.</p>
        </div>
    );
};

export default Notifications;