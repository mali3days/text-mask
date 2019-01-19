import React from 'react'
import MaskedInput from '../src/reactTextMask'

export default () => (
  <form className='form-horizontal'>
    <div className='form-group'>
      <label htmlFor='1' className='col-sm-2 control-label'>Masked input</label>

      <div className='col-sm-10'>
        <MaskedInput
          mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          placeholder='dd/mm/yyyy'
          className='form-control'
          id='1'
          type='text'
        />
      </div>
    </div>
  </form>
)
