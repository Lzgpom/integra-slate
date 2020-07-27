# CommunicationContext
It is needed a communication context to send and receives messages with the terminal.
In any connection there's always a channel and a datalink. In order to create a communication context there are several creating methods to do so.
Each method is for each type of channel.

```java
CommunicationContext context = new CommunicationContext(channel, datalink);
```

```csharp
CommunicationContext context = new CommunicationContext(channel, datalink);
```

## Constructor
Creates an instance of CommunicationContext. This is used to send the messages and receive.

Parameter| Type | Description
---------| ---- | -----------
channel | IChannel | The channel of the communication.
datalink | IDatalink | The datalink of the communication.

# IChannel
The is a channel where messages are sent and received.

## ChannelClientSocket
```java
IChannel channel = new ChannelClientSocket(ip, port, timeout);
```
```csharp
IChannel channel = new ChannelClientSocket(ip, port, timeout);
```

Simple connection with sockets, the POS being the client.

Parameter| Type | Description
---------| ---- | -----------
ip | String | A string with an ip.
port | Integer | The port number.

## ChannelClientSocketSSL
```java
IChannel channel = new ChannelClientSocketSSL(ip, port, timeout);
```
```csharp
IChannel channel = new ChannelClientSocketSSL(ip, port, timeout);
```

Connection still with sockets, with added security. The POS is the client.

Parameter| Type | Description
---------| ---- | -----------
ip | String | A string with an ip.
port | Integer | The port number.

## ChannelClientHTTP
```java
IChannel channel = new ChannelClientHTTP(host, port, timeout);
```
```csharp
IChannel channel = new ChannelClientHTTP(host, port, timeout);
```

Connection that uses HTTP to communicate, being the POS the client.

Parameter| Type | Description
---------| ---- | -----------
host | String | A string with the host name, it can also be an ip.
port | Integer | The port number.

## ChannelClientHTTPS
```java
IChannel channel = new ChannelClientHTTPS(host, port, timeout);
```
```csharp
IChannel channel = new ChannelClientHTTPS(host, port, timeout);
```

Connection that now uses HTTPS for added security. The POS is the client.

Parameter| Type | Description
---------| ---- | -----------
host | String | A string with the host name, it can also be an ip.
port | String | The port number.

## ChannelServerSocket
```java
IChannel channel = new ChannelServerSocket(port, timeout);
```
```csharp
IChannel channel = new ChannelServerSocket(port, timeout);
```

Simple connection using sockets. Now the POS is the server.

Parameter| Type | Description
---------| ---- | -----------
port | Integer | The port number.

## ChannelServerSocketSSL
```java
IChannel channel = new ChannelServerSocketSSL(port, keyStoreFile, keyStorePassword, Password, ciphers, protocols, timeout);
```
```csharp
IChannel channel = new ChannelServerSocketSSL(port, keyStoreFile, keyStorePassword, Password, ciphers, protocols, timeout);
```

Connection still with sockets, with added security. The POS is the server.

Parameter| Type | Description
---------| ---- | -----------
port | Integer | The port number.
keyStoreFile | String | Location to the key store file.
keyStorePassword | String | The key store password.
keyPassword | String | The key password.
ciphers | String[] | The ciphers that can be used. ex: "ssl_rsa_with_3des_ede_cbc_sha"
protocols | String[] | The protocol that can be used. ex: "SSLv3"

## ChannelServerHTTP
```java
IChannel channel = new ChannelServerHTTP(int port, timeout);
```
```csharp
IChannel channel = new ChannelServerHTTP(int port, timeout);
```

Connection that uses HTTP to communicate, being the POS the server.

Parameter| Type | Description
---------| ---- | -----------
port | Integer | The port number.

## ChannelServerHTTPS
```java
IChannel channel = new ChannelServerHTTPS(port, keyStoreFile, keyStorePassword, keyPassword, ciphers, protocols, timeout);
```
```csharp
IChannel channel = new ChannelServerHTTPS(port, keyStoreFile, keyStorePassword, keyPassword, ciphers, protocols, timeout);
```

Connection that now uses HTTPS for added security. The POS is the server.

Parameter| Type | Description
---------| ---- | -----------
port | Integer | The port number.
keyStoreFile | String | Location to the key store file.
keyStorePassword | String | The key store password.
keyPassword | String | The key password.
ciphers | String[] | The ciphers that can be used. ex: "ssl_rsa_with_3des_ede_cbc_sha"
protocols | String[] | The protocol that can be used. ex: "SSLv3"

## ChannelComPort
```java
IChannel channel = new ChannelComPort(comPortAdapter, baudRate, dataBits, stopBits, parity, flowControl, timeout);
```
```csharp
IChannel channel = new ChannelComPort(comPortAdapter, baudRate, dataBits, stopBits, parity, flowControl, timeout);
```

A channel when connecting with serial ports

Parameter| Type | Description
---------| ---- | -----------
comPortAdapter | String | An id of the com port.
baudRate | Integer | Rate of the bandwidth.
dataBits | Integer | The key store password.
stopBits | Integer | Can only be 1 or 2.
parity | Integer | The parity of the connection
flowControl | Integer | The flow control of the channel
timeout | Integer | The timeout in seconds.

# IDatalink
This is used to check the integrity of the messages sent.

## Datalink
```java
IDatalink datalink = new Datalink();
```
```csharp
IDatalink datalink = new Datalink();
```

This is the most simple Datalink.

## DatalinkStxEtxAckLrc
```java
IDatalink datalink = new DatalinkStxEtxAckLrc(nAckTimeout, nAckCounterMax);
```
```csharp
IDatalink datalink = new DatalinkStxEtxAckLrc(nAckTimeout, nAckCounterMax);
```

Datalink thread implementing low level protocol of the server 
waiting for the 3cInterface requests. The format of the request string is STX...Data...ETX|LRC.

Parameter| Type | Description
---------| ---- | -----------
nAckTimeout | Integer | The ack timeout in seconds
nAckCounterMax | Integer | The ack max tries for validation

## DatalinkStxEtxCrcSendAck 
```java
IDatalink datalink = new DatalinkStxEtxCrcSendAck(nAckTimeout, nAckCounterMax);
```
```csharp
IDatalink datalink = new DatalinkStxEtxCrcSendAck(nAckTimeout, nAckCounterMax);
```

Datalink implementing the StxEtxCrc and activly sending Acks for incoming Messages.

Parameter| Type | Description
---------| ---- | -----------
nAckTimeout | Integer | The ack timeout in seconds
nAckCounterMax | Integer | The ack max tries for validation

## DatalinkStxEtxCrcSendAckSeqCounter 
```java
IDatalink datalink = new DatalinkStxEtxCrcSendAckSeqCounter(nAckTimeout, nAckCounterMax, keepAliveInterval, isDuplicateCheckEnabled, maskNonAsciiChars, synBytes);
```
```csharp
IDatalink datalink = new DatalinkStxEtxCrcSendAckSeqCounter(nAckTimeout, nAckCounterMax, keepAliveInterval, isDuplicateCheckEnabled, maskNonAsciiChars, synBytes)
```

Parameter| Type | Description
---------| ---- | -----------
nAckTimeout | Integer | The ack timeout in seconds
nAckCounterMax | Integer | The ack max tries for validation
keepAliveInterval | Integer | The interval to keep alive the connection in seconds.
isDuplicateCheckEnabled | Boolean | If the duplicate check is enabled.
maskNonAsciiChars | Boolean | If the non ascii chars are masked.
synBytes | Integer | The number of syn bytes.

## Others
The are other datalinks:  
**- DatalinkPayAtTable**  

