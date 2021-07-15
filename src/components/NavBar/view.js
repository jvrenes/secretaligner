import {
    Avatar,
    AvatarImage,
    AvatarName,
    Icon,
    NavContainer
} from './styles'

import avatarIcon from '../../assets/icons/avatar.png'
import arrowIcon from '../../assets/icons/arrow-down.png'


const NavBar = ({ doctor }) => {
    return(
        <NavContainer>
            <Avatar>
                <AvatarImage src={avatarIcon} />
            </Avatar>
            <AvatarName>{doctor}</AvatarName>
            <Icon src={arrowIcon}/>
        </NavContainer>
    )
}

export default NavBar