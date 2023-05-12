import './Coupon.css'
import coupon from './Coupon.png'
import {useForm } from 'react-hook-form'

function Coupon(){
    let {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm()

    function onSubmit(data){
        console.log(data)
        reset()
    }

    return(
        <div className='coupon_wrapper'>
            <div className='coupon_pct'>
                <img src={coupon} alt='coupon'/>
            </div>
            <div className='coupon_info'>
                <p><span>5% off</span> on the first order</p>
                <div className='input_wrapper'>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input placeholder='+49-999-999-99-99' {...register('PhoneNumber', {
                            required: 'Please enter a phone number',
                            pattern: {
                                value: /\W\d\d\d\d\d\d\d\d\d\d\d\d/,
                                message: 'The phone number is incorrect'
                            }
                        })}/>
                    </div>
                    <div className='errors'>{errors?.PhoneNumber && <p>{errors.PhoneNumber.message}</p>}</div>
                    <div className='discount_wrapper'>       
                        <button type={'submit'}>Get a discount</button> 
    	            </div>
                 </form>  
                </div>
            </div>
        </div>
    )   
}

export default Coupon
