import type { ModalProps } from 'antd'
import { Button, Modal } from 'antd'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function WalletModal(props: ModalProps) {
  const { connect, connectors, isConnecting, pendingConnector } = useConnect()
  const { data: account } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <Modal title="Wallet" footer={null} {...props}>
      {account ? (
        <>
          <div className="flex-center my-3">{account.address}</div>
          <Button
            size="large"
            type="primary"
            onClick={(e) => {
              disconnect()
              props.onCancel?.(e)
            }}
            className="flex-center w-full"
          >
            disconnect <span className="i-carbon:cookie"></span>
          </Button>
        </>
      ) : (
        <div className="flex-col-center">
          {connectors.map((connector) => (
            <Button
              ghost
              size="large"
              type="primary"
              disabled={!connector.ready}
              key={connector.id}
              onClick={(e) => {
                connect(connector)
                props.onCancel?.(e)
              }}
              className="w-full mb-3 rounded-lg h-12"
            >
              {connector.name}
              {!connector.ready && ' (unsupported)'}
              {isConnecting && connector.id === pendingConnector?.id && ' (connecting)'}
            </Button>
          ))}
        </div>
      )}
    </Modal>
  )
}
