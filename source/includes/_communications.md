# Communications
It is needed a communication context to send and receives messages with the terminal.
In any connection there's always a channel and a datalink. In order to create a communication context there are several creating methods to do so.
Each method is for each type of channel.

```java
CommunicationContext context = new CommunicationContext(channel, datalink);
```

```csharp
CommunicationContext context = new CommunicationContext(channel, datalink);
```

Creates an instance of CommunicationContext. This is used to send the messages and receive.

Parameter| Type | Description
---------| ---- | -----------
channel | IChannel | The channel of the communication.
datalink | Datalink | The datalink of the communication.

## Client Socket
```java
IChannel channel = new ChannelClientSocket(ip, port);
```
```csharp
IChannel channel = new ChannelClientSocket(ip, port);
```

Simple connection with sockets, the POS being the client.

Parameter| Type | Description
---------| ---- | -----------
ip | String | A string with an ip.
port | Integer | The port number.

## Client Socket SSL
```java
IChannel channel = new ChannelClientSocketSSL(ip, port, keyStoreFile, keyStorePassword, keyPassword, ciphers, protocols);
```
```csharp
IChannel channel = new ChannelClientSocketSSL(ip, port, keyStoreFile, keyStorePassword, keyPassword, ciphers, protocols):
```

Connection still with sockets, with added security. The POS is the client.

Parameter| Type | Description
---------| ---- | -----------
ip | String | A string with an ip.
port | Integer | The port number.
keyStoreFile | String | Location to the key store file.
keyStorePassword | String | The key store password.
keyPassword | String | The key password.
ciphers | String[] | The ciphers that can be used. ex: "ssl_rsa_with_3des_ede_cbc_sha"
protocols | String[] | The protocol that can be used. ex: "SSLv3"

## Client HTTP
```java
IChannel channel = new ChannelClientHTTP(host, port);
```
```csharp
IChannel channel = new ChannelClientHTTP(host, port);
```

Connection that uses HTTP to communicate, being the POS the client.

Parameter| Type | Description
---------| ---- | -----------
host | String | A string with the host name, it can also be an ip.
port | Integer | The port number.

## Client HTTPS
```java
IChannel channel = new ChannelClientHTTPS(host, port, keyStoreFile, keyStorePassword, keyPassword, ciphers, protocols);
```
```csharp
IChannel channel = new ChannelClientHTTPS(host, port, keyStoreFile, keyStorePassword, keyPassword, ciphers, protocols);
```

Connection that now uses HTTPS for added security. The POS is the client.

Parameter| Type | Description
---------| ---- | -----------
link | The type of the datalink.
host | String | A string with the host name, it can also be an ip.
port | String | The port number.
keyStoreFile | String | Location to the key store file.
keyStorePassword | String | The key store password.
keyPassword | String | The key password.
ciphers | String[] | The ciphers that can be used. ex: "ssl_rsa_with_3des_ede_cbc_sha"
protocols | String[] | The protocol that can be used. ex: "SSLv3"

## Server Socket
```java
IChannel channel = new ChannelServerSocket(port);
```
```csharp
IChannel channel = new ChannelServerSocket(port);
```

Simple connection using sockets. Now the POS is the server.

Parameter| Type | Description
---------| ---- | -----------
port | Integer | The port number.

## Server Socket SSL
```java
IChannel channel = new ChannelServerSocketSSL(port, keyStoreFile, keyStorePassword, Password, ciphers, protocols);
```
```csharp
IChannel channel = new ChannelServerSocketSSL(port, keyStoreFile, keyStorePassword, Password, ciphers, protocols);
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

## Server HTTP
```java
IChannel channel = new ChannelServerHTTP(int port);
```
```csharp
IChannel channel = new ChannelServerHTTP(int port);
```

Connection that uses HTTP to communicate, being the POS the server.

Parameter| Type | Description
---------| ---- | -----------
port | Integer | The port number.

## Server HTTPS
```java
IChannel channel = new ChannelServerHTTPS(port, keyStoreFile, keyStorePassword, keyPassword, ciphers, protocols);
```
```csharp
IChannel channel = new ChannelServerHTTPS(port, keyStoreFile, keyStorePassword, keyPassword, ciphers, protocols);
```

Connection that now uses HTTPS for added security. The POS is the server.

Parameter| Type | Description
---------| ---- | -----------
link | The type of the datalink.
port | Integer | The port number.
keyStoreFile | String | Location to the key store file.
keyStorePassword | String | The key store password.
keyPassword | String | The key password.
ciphers | String[] | The ciphers that can be used. ex: "ssl_rsa_with_3des_ede_cbc_sha"
protocols | String[] | The protocol that can be used. ex: "SSLv3"

## Com Port
```java
IChannel channel = new ChannelComPort(comPort, baudRate, dataBits, parity, stopBits, handshake);
```
```csharp
IChannel channel = new ChannelComPort(comPort, baudRate, dataBits, parity, stopBits, handshake);
```

A different type of connection that I don't really know how to describe...

Parameter| Type | Description
---------| ---- | -----------
comPort | String | An id of the com port.
baudRate | Integer | Rate that ...
dataBits | Integer | The key store password.
parity | Parity | The partity can be: NONE, ODD, EVEN, MARK, SPACE
stopBits | Integer | Can only be 1 or 2.
HandShake | HandShake | There are multiples types of Handshakes...

<aside class="warning">
Most likely the parameters or the description itself might not be correct.
</aside>
