import QRCode from 'qrcode.react';

import { Content, Header, Text, AddressBar, Icon, Layout, Column, Row } from '@/ui/components';
import { useAccountAddress, useCurrentAccount } from '@/ui/state/accounts/hooks';
import { sizes } from '@/ui/theme/spacing';

import './index.less';

export default function ReceiveScreen() {
  const currentAccount = useCurrentAccount();
  const address = useAccountAddress();

  const qrCodeOptions = {
    renderAs: 'svg',
    size: sizes.qrcode,
    imageSettings: {
      src: './images/logo/logo@128x.png', // Replace with the URL of your image
      height: 45, // Adjust the size of the logo as needed
      width: 45,
      excavate: true // This removes the dark squares in the QR code where the logo is placed
    }
  };

  return (
    <Layout>
      <Header
        onBack={() => {
          window.history.go(-1);
        }}
        title="Address"
      />
      <Content>
        <Column gap="xl" mt="lg">
          <Column
            justifyCenter
            rounded
            style={{ backgroundColor: 'white', alignSelf: 'center', alignItems: 'center', padding: 10 }}>
            <QRCode
              value={address || ''}
              renderAs={'svg' as const} // Specify the type as "svg"
              size={qrCodeOptions.size}
              level={'M' as const}
              imageSettings={qrCodeOptions.imageSettings}
            />
          </Column>

          <Row justifyCenter>
            <Icon icon="user" />
            <Text preset="regular-bold" text={currentAccount?.alianName} />
          </Row>
          <AddressBar />
        </Column>
      </Content>
    </Layout>
  );
}
