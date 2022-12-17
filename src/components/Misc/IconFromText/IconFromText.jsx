import {
  HomeIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  ChartPieIcon,
  MusicalNoteIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  HomeModernIcon,
  GlobeAmericasIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/20/solid";

export const IconFromText = ({ text, ...otherProps }) => {
  let Icon = <CurrencyDollarIcon {...otherProps} />;

  if (text === "shopping-cart") {
    Icon = <ShoppingCartIcon {...otherProps} />;
  } else if (text === "shopping-bag") {
    Icon = <ShoppingBagIcon {...otherProps} />;
  } else if (text === "chart-bar") {
    Icon = <ChartBarIcon {...otherProps} />;
  } else if (text === "chart-pie") {
    Icon = <ChartPieIcon {...otherProps} />;
  } else if (text === "musical-note") {
    Icon = <MusicalNoteIcon {...otherProps} />;
  } else if (text === "library") {
    Icon = <BuildingLibraryIcon {...otherProps} />;
  } else if (text === "office") {
    Icon = <BuildingOfficeIcon {...otherProps} />;
  } else if (text === "store") {
    Icon = <BuildingStorefrontIcon {...otherProps} />;
  } else if (text === "home") {
    Icon = <HomeIcon {...otherProps} />;
  } else if (text === "home-modern") {
    Icon = <HomeModernIcon {...otherProps} />;
  } else if (text === "globe") {
    Icon = <GlobeAmericasIcon {...otherProps} />;
  } else if (text === "device-mobile") {
    Icon = <DevicePhoneMobileIcon {...otherProps} />;
  } else if (text === "device-tablet") {
    Icon = <DeviceTabletIcon {...otherProps} />;
  }

  return Icon;
};
