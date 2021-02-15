import React, { useState } from 'react';
import axios from 'axios';

export default function ContactFormVercel(props) {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xyybvboa',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, props.successMesage);
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <>
      <form onSubmit={handleOnSubmit} className="w-full mx-auto p-5">
        <div className="grid grid-cols-1 gap-6">
          <div className="block">
            <label htmlFor="email" className="capitalize text-nord6 dark:text-shadow">
              {props.email}
            </label>
            <input
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
              className="block w-full mt-1 border-gray-200 rounded-md shadow-sm text-nord1 bg-nord6 focus:border-gray-400 focus:ring focus:ring-nord5 focus:ring-opacity-50"
            />
          </div>

          <div className="block">
            <label htmlFor="message" className="capitalize text-nord6 dark:text-shadow">
              {props.message}
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleOnChange}
              required
              value={inputs.message}
              className="block w-full mt-1 border-gray-200 rounded-md shadow-sm text-nord1 bg-nord6 focus:border-gray-400 focus:ring focus:ring-nord5 focus:ring-opacity-50 h-36"
            />
          </div>
          <button
            type="submit"
            disabled={status.submitting}
            className="block w-full max-w-md px-4 py-2 mx-auto text-xs font-bold uppercase align-middle rounded outline-none text-nord1 bg-nord14 elevation-1 hover:bg-nord7 hover:elevation-2 "
            style={{ transition: 'all .15s ease' }}
          >
            {!status.submitting ? (!status.submitted ? props.send : props.submitted) : `${props.sending}...`}
          </button>
        </div>
        <div>
          {status.info.error && (
            <div className="p-4 mt-2 text-center rounded error bg-nord11 text-nord0 elevation-2">{props.error}</div>
          )}
          {!status.info.error && status.info.msg && (
            <p className="p-4 mt-2 text-center rounded error bg-nord14 text-nord0 elevation-2">{status.info.msg}</p>
          )}
        </div>
      </form>
    </>
  );
}
