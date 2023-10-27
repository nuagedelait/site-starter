/* eslint-disable no-process-env */

import { ObjType } from '../types';

import * as sanityConfig from './sanity';
import * as validationsConfig from './sanity'
import * as responsiveConfig from './responsive'
import * as calendarConfig from './calendar'

export const sanity = {
    ...Object.keys(sanityConfig).filter((key: string) => key.toUpperCase().indexOf('TOKEN') === -1).reduce((acc: ObjType, current: string) => {
        acc[current] = (sanityConfig as ObjType)[current]
        return acc
    }, {})
}

export const sanityWriteToken = sanityConfig['writeToken'];
export const sanityReadToken = sanityConfig['readToken'];

export const validations = {
    ...validationsConfig
}

export const responsive = {
    ...responsiveConfig
}

export const calendar = {
    ...calendarConfig
}

export const gmapKey = process.env.NEXT_PUBLIC_GMAP_API_KEY
export const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
export const defaultTitle = 'NextJS - Sanity framework'
export const defaultDescription = 'NextJS & Sanity Starter with clean architecture'
