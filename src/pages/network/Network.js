import React from 'react'

export const Network = () => {
  return (
    <div>
        <div className=' ru-profile p-3 pt-4 '>
      <div className='d-flex flex-column '>
        <div className='mb-4'>
          <h4 className='color-blue'>Network Specification</h4>
          <p  style={{ fontWeight: "400" }}>Lorem ipsum is simply a dummy text</p>
        </div>

        <div className='row bgc-white py-4 rounded' >
          <div className='col'><p>PowerRAN</p></div>
          <div className='col'><p>System Config: TDD</p></div>
          <div className='col'><p>Spectrum: 5G</p></div>
          <div className='col'><p>Profile: Warehouse</p></div>
        </div>

        <div className='row mt-3 bgc-white rounded pb-4'>
          <div className='col-12 pt-1'>
            <div className='container-fluid pt-4'>
              <div className='row rounded cl-gap'>
                <div className='col rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>RU/DU Ratio</label>
                  <input value={'-'} className='bd-none ' disabled />
                </div>
                <div className='col rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>RU/DU Ratio</label>
                  <input value={'-'} className='bd-none ' disabled />
                </div>
                <div className='col rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>RU/DU Ratio</label>
                  <input value={'-'} className='bd-none ' disabled />
                </div>
              </div>
            </div>

            <div className='col-12 mt-3'>
              <p>Antenna above Roof</p>
              <div className='d-flex cl-gap mt-1'>
                {/* <img className='circle-img' src={doubleCircle} />
                <img className='circle-img' src={circle} /> */}
              </div>
            </div>
          </div>
          <div className='col-12 mt-3'>
            <div className='container-fluid'>
              <div className='row rounded cl-gap'>
                <div className='col rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>DL MIMO</label>
                  <select className="form-select form-select-sm " aria-label=".form-select-sm example" disabled>
  <option selected>-</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                </div>
                <div className='col rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>UL MIMO</label>
                  <select className="form-select form-select-sm " aria-label=".form-select-sm example" disabled>
  <option selected>-</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                </div>
                <div className='col rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>UL MIMO</label>
                  <input value={'-'} className='bd-none ' disabled />
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid mt-3'>
            <hr className='mt-3' />
          </div>
          <div className='col-12'>
            <div className='container-fluid mt-3'>
              <h4>Antenna Type</h4>
              <div className='mt-3 btn-group' role='group'>
                <button type='button' className='btn btn-outline-secondary px-4 py-2'>Micro</button>
                <button type='submit' className='btn btn-primary btn-bg-1 px-4 py-2'>Micro</button>
              </div>

              <div className='row rounded cl-gap mt-4'>
                <div className='col rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>Tx Macro Baseline Height</label>
                  <input value={'-'} className='bd-none ' disabled />
                </div>
                <div className='col rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>Tx Macro Power</label>
                  <input value={'-'} className='bd-none ' disabled />
                </div>
                <div className='col rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>Tx Macro Gain</label>
                  <input value={'-'} className='bd-none ' disabled />
                </div>

              </div>
              <div className='row rounded cl-gap mt-3 '>
                <div className='col rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>Tx Macro Losses</label>
                  <input value={'-'} className='bd-none ' disabled />
                </div>
                <div className='col rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>Rx Gain</label>
                  <input value={'-'} className='bd-none ' disabled />
                </div>
                <div className='col rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>Rx Losses</label>
                  <input value={'-'} className='bd-none ' disabled />
                </div>
              </div>
              <div className='row rounded cl-gap mt-3 '>
                <div className='col-4 rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>Rx Macro Losses</label>
                  <input value={'-'} className='bd-none ' disabled />
                </div>
                <div className='col-4 rounded mb-1 bgc-input d-flex flex-column py-3 border'>
                  <label>Rx Height</label>
                  <input value={'-'} className='bd-none ' disabled />
                </div>
              </div>

              <div className='mt-3 d-flex justify-content-end'>
                <div className='mt-3 btn'>
                  <button type='button' className='btn btn-outline py-3 px-4'>RESET</button>
                  <button type='submit' className='btn btn-primary bd-none py-3 px-4 btn-bg-2'>NEXT</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
