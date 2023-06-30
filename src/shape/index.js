import {string,number,bool,oneOf,shape} from 'prop-types'

export const paisShape = shape({
    name: string.isRequired,
    flag: string.isRequired,
    iso2:string,
    iso3:string,
})