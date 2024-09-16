export const COLORS = {
    pink:'#C5295D',
    purple:'#6868D9',
    gray900:'#313235',
    gray700:'#60666C',
    gray500:'#949A9C',
    gray300:'#C9CECF',
    gray100:'#F2F3F3',
    white:'#FFFFFF',
}

export const BREAKPOINT = {
    phone:600,
    tablet:950,
    laptop:1300,
}

export const QUERIES = {
    phoneAndDown:`(max-width:${BREAKPOINT.phone/16}rem)`,
    tabletAndDown:`(max-width:${BREAKPOINT.tablet/16}rem)`,
    laptopAndDown:`(max-width:${BREAKPOINT.laptop/16}rem)`,
}