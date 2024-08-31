import { Hero, AppShell, Main, Search, Button, Select, TabGroup, ProductCard, Pagination, Header, Logo, ButtonIcon, Avatar } from '@juno/uikit';

export default function Product() {
  return (
<AppShell pageBackground="base-0">
  <Hero width="1200px" height={228} flexDirection="flex-col" fontSize="base" paddingX="24px" paddingY="24px" gap="24px" alignItems="start" justifyContent="start" bgImageSrc={null} bgOverlay="darker" background="base-50">
    <div className="flex flex-row flex-nowrap w-full max-w-full   self-auto text-inherit    gap-3   items-stretch justify-start h-auto  ">
      <div className="flex flex-col flex-nowrap w-full max-w-full   self-auto text-inherit    gap-3   items-start justify-start h-auto  ">
        <h1 className="text-ellipsis text-xl     font-semibold text-left " style={{ whiteSpace: 'pre-wrap' }}>
          Product Search
        </h1>
      </div>
      <div className="flex flex-row flex-nowrap w-full max-w-full   self-auto text-inherit    gap-3   items-end justify-end h-auto  "></div>
    </div>
    <div className="flex flex-row flex-nowrap w-full max-w-full   self-auto text-inherit    gap-3   items-center justify-start h-auto  ">
      <Search width="full" bgColor="base-0" size="large" />
      <Button text="Search" type="accent" size="medium" />
    </div>
    <div className="flex flex-row flex-nowrap w-full max-w-full   self-auto text-inherit    gap-4   items-start justify-start h-auto  ">
      <Select width="auto" label="" placeholder="Category" options={["Electronics","Clothing","Home & Kitchen","Books","Beauty & Personal Care"]} />
      <Select width="auto" label="" placeholder="Price Range" options={["$0 - $50","$50 - $100","$100 - $200","$200 - $500","Above $500"]} />
    </div>
  </Hero>
  <Main gap="24px" width="1200" corners="md" marginX="12px" paddingX="24px" paddingY="24px" textSize="base" direction="flex-col" selfAlign="center" alignItems="start" background="base-0" justifyContent="start">
    <TabGroup tabs={[{"name":"All Products","icon":"shopping","isActive":true},{"name":"Electronics","icon":"settings","isActive":false},{"name":"Clothing","icon":"tshirt","isActive":false},{"name":"Home & Kitchen","icon":"home","isActive":false},{"name":"Books","icon":"book","isActive":false},{"name":"Beauty","icon":"heart","isActive":false}]} selectColor="primary" size="medium" underlineAll />
    <div className="grid  w-full   gap-6  h-full text-inherit" style={{ alignItems: 'start', gridTemplateColumns: 'repeat(5, minmax(0px, 1fr))' }}>
      <ProductCard title="Product Name" descriptionFirstLine="Description line 1" descriptionSecondLine="" price="$50" priceNote="total" rating="4.5" tag={null} corners="none" />
      <ProductCard title="Product Name" descriptionFirstLine="Description line 1" descriptionSecondLine="" price="$50" priceNote="total" rating="4.5" tag={null} corners="none" />
      <ProductCard title="Product Name" descriptionFirstLine="Description line 1" descriptionSecondLine="" price="$50" priceNote="total" rating="4.5" tag={null} corners="none" />
      <ProductCard title="Product Name" descriptionFirstLine="Description line 1" descriptionSecondLine="" price="$50" priceNote="total" rating="4.5" tag={null} corners="none" />
      <ProductCard title="Product Name" descriptionFirstLine="Description line 1" descriptionSecondLine="" price="$50" priceNote="total" rating="4.5" tag={null} corners="none" />
    </div>
    <Pagination type="mini" />
  </Main>
  <Header gap="12px" width="1200" paddingX="24px" paddingY="12px" alignItems="stretch">
    <div className="flex flex-row flex-nowrap w-full max-w-full   self-auto text-inherit    gap-6   items-center justify-start h-auto  ">
      <Logo type="logo" size="24px" />
    </div>
    <div className="flex flex-row flex-nowrap w-full max-w-full   self-auto text-inherit    gap-3   items-center justify-end h-auto  ">
      <ButtonIcon icon="support" type="ghost" size="small" isPill />
      <ButtonIcon icon="settings" type="ghost" size="small" isPill />
      <Avatar type="initials" size="28px" bgColor="primary" indicatorType="none" imageSrc={null} />
    </div>
  </Header>
</AppShell>
  );
}