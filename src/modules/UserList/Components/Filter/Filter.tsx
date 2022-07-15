import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import './Filter.scss'
import { waitFor } from '@testing-library/react'
import DateRangePicker from 'rsuite/DateRangePicker'
import { useDispatch } from 'react-redux'

import { IProduct, ICategory } from 'models/product'
import Multi_Select from 'utils/MultiSelect'
import { setUserSearch_search } from 'modules/UserList/redux/searchReducer'
interface country {
  active_currency: null
  code: string
  code3: string
  country: string
  currency_id: string
  enabled: string
  id: string
  is_fraudlent: string
}
interface IProps {
  data?: country[]
}
const Filter = (props: IProps) => {
  const filter__input = useRef()

  const dispatch = useDispatch()
  const countries = props.data

  // const handleSearch=()=>{
  //   dispatch(setUserSearch_search())
  // }
  console.log(countries)
  return (
    <div className="filter">
      <h2>Search for user</h2>
      <div className="filter-main">
        <details>
          <summary className="filter-main__top">
            {/* imput */}
            <input
              type="text"
              placeholder="Search the keyword"
              onChange={(e) => {
                dispatch(setUserSearch_search(e.target.value))
              }}
              // ref={filter__input}
            />

            {/* select membership */}
            <select name="" id="" placeholder="All membership">
              <option value="" style={{ display: 'none' }}>
                All membership
              </option>
              <option value="">General</option>
            </select>

            {/* status */}
            {/* <select name="" id="">
              <option style={{ lineHeight: '40px' }} value="">
                Any status
              </option>
              <option value="">Enable</option>
              <option value="">Disable</option>
              <option value="">Unapproved vendor</option>
            </select> */}
            <Multi_Select
              options={[
                { label: 'Administrator', value: 'Administrator' },
                { label: 'Content management', value: 'Content management' },
                { label: 'Coupons management', value: 'Coupons management' },
                { label: 'Vendor', value: 'Vendor' },
                { label: 'View order reports', value: 'View order reports' },
                { label: 'Volume discounts management', value: 'Volume discounts management' },
              ]}
            ></Multi_Select>
            {/* BUTTON */}
            <button>Search</button>
          </summary>
          {/* bottom */}
          <div className="filter-main-bot">
            <div className="filter-main-bot__input">
              <ul>
                {/* 1 */}
                <li>
                  <span>Country</span>
                  <select placeholder="select country">
                    <option value="" style={{ display: 'none' }}>
                      Select Country
                    </option>
                    {countries?.map((country, index) => (
                      <option key={index} value={country.country}>
                        {country.country}
                      </option>
                    ))}
                  </select>
                </li>
                {/* 2 */}
                <li>
                  <span>State</span>
                  <input type="text" />
                </li>
                {/* 3 */}
                <li>
                  <span>Address</span>
                  <input type="text" />
                </li>
                {/* 4 */}
                <li>
                  <span>Phone</span>
                  <input type="text" />
                </li>
              </ul>
            </div>

            <div className="filter-main-bot__checkbox">
              <span>User activity</span>
              <input type="radio" name="check2" value="register" className="checkbox" />
              <span>Register</span>
              <input type="radio" name="check2" value="last-logged-in" className="checkbox" />
              <span>Last logged in</span>
              {/* <input type="date" className="filter-main-bot__checkbox-date" /> */}
              <div className="date-ranger">
                <DateRangePicker />
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  )
}

export default Filter
