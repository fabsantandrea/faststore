import {
  Navbar as UINavbar,
  NavbarLinks as UINavbarLinks,
  NavbarLinksList as UINavbarLinksList,
  NavbarSlider as UINavbarSlider,
  NavbarSliderHeader as UINavbarSliderHeader,
  NavbarSliderContent as UINavbarSliderContent,
  NavbarSliderFooter as UINavbarSliderFooter,
  NavbarHeader as UINavbarHeader,
  NavbarRow as UINavbarRow,
  NavbarButtons as UINavbarButtons,
  IconButton as UIIconButton,
} from '@faststore/ui'

import { getSectionOverrides } from 'src/sdk/overrides/overrides'
import { override } from 'src/customizations/src/components/overrides/Navbar'
import type { SectionOverrideDefinition } from 'src/typings/overridesDefinition'

const {
  Navbar,
  NavbarLinks,
  NavbarLinksList,
  NavbarSlider,
  NavbarSliderHeader,
  NavbarSliderContent,
  NavbarSliderFooter,
  NavbarHeader,
  NavbarRow,
  NavbarButtons,
  IconButton,
} = getSectionOverrides(
  {
    Navbar: UINavbar,
    NavbarLinks: UINavbarLinks,
    NavbarLinksList: UINavbarLinksList,
    NavbarSlider: UINavbarSlider,
    NavbarSliderHeader: UINavbarSliderHeader,
    NavbarSliderContent: UINavbarSliderContent,
    NavbarSliderFooter: UINavbarSliderFooter,
    NavbarHeader: UINavbarHeader,
    NavbarRow: UINavbarRow,
    NavbarButtons: UINavbarButtons,
    IconButton: UIIconButton,
  },
  override as SectionOverrideDefinition<'Navbar'>
)

export {
  Navbar,
  NavbarLinks,
  NavbarLinksList,
  NavbarSlider,
  NavbarSliderHeader,
  NavbarSliderContent,
  NavbarSliderFooter,
  NavbarHeader,
  NavbarRow,
  NavbarButtons,
  IconButton,
}
