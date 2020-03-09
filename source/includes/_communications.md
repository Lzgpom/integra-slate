# Communications
It is needed a communication context to send and receives messages with the terminal.
In any connection there's always a channel and a datalink. In order to create a communication context there are several creating methods to do so.
Each method is for each type of channel.

## Client Socket
```java
CommunicationContext context = CommunicationContext.createClientHTTP(Datalink link, String ip, int port)
```
```csharp
CommunicationContext context = CommunicationContext.createClientHTTP(Datalink link, string ip, int port)
```

Simple connection with sockets, the POS being the client.

Parameter | Description
--------- | -----------
link | The type of the datalink.
ip | A string with an ip.
port | The port number.

## Client Socket SSL
```java
CommunicationContext context = CommunicationContext.createClientSocketSSL(Datalink link, String ip, int port, String keyStoreFile, String keyStorePassword, String keyPassword, String[] ciphers, String[] protocols)
```
```csharp
CommunicationContext context = CommunicationContext.createClientSocketSSL(Datalink link, string ip, int port, string keyStoreFile, string keyStorePassword, string keyPassword, string[] ciphers, string[] protocols)
```

Connection still with sockets, with added security. The POS is the client.

Parameter | Description
--------- | -----------
link | The type of the datalink.
ip | A string with an ip.
port | The port number.
keyStoreFile | Location to the key store file.
keyStorePassword | The key store password.
keyPassword | The key password.
ciphers | The ciphers that can be used. ex: "ssl_rsa_with_3des_ede_cbc_sha"
protocols | The protocol that can be used. ex: "SSLv3"

## Client HTTP
```java
CommunicationContext context = CommunicationContext.createClientHTTP(Datalink link, String host, int port)
```
```csharp
CommunicationContext context = CommunicationContext.createClientHTTP(Datalink link, string host, int port)
```

Connection that uses HTTP to communicate, being the POS the client.

Parameter | Description
--------- | -----------
link | The type of the datalink.
host | A string with the host name, it can also be an ip.
port | The port number.

## Client HTTPS
```java
CommunicationContext context = CommunicationContext.createClientHTTPS(Datalink link, String host, int port, String keyStoreFile, String keyStorePassword, String keyPassword, String[] ciphers, String[] protocols)
```
```csharp
CommunicationContext context = CommunicationContext.createClientHTTPS(Datalink link, string host, int port, string keyStoreFile, string keyStorePassword, string keyPassword, string[] ciphers, string[] protocols)
```

Connection that now uses HTTPS for added security. The POS is the client.

Parameter | Description
--------- | -----------
link | The type of the datalink.
host | A string with the host name, it can also be an ip.
port | The port number.
keyStoreFile | Location to the key store file.
keyStorePassword | The key store password.
keyPassword | The key password.
ciphers | The ciphers that can be used. ex: "ssl_rsa_with_3des_ede_cbc_sha"
protocols | The protocol that can be used. ex: "SSLv3"

## Server Socket
```java
CommunicationContext context = CommunicationContext.createServerSocket(Datalink link, int port);
```
```csharp
CommunicationContext context = CommunicationContext.createServerSocket(Datalink link, int port);
```

Simple connection using sockets. Now the POS is the server.

Parameter | Description
--------- | -----------
link | The type of the datalink.
port | The port number.

## Server Socket SSL
```java
CommunicationContext context = CommunicationContext.createServerSocketSSL(Datalink link, int port, String keyStoreFile, String keyStorePassword, String keyPassword, String[] ciphers, String[] protocols)
```
```csharp
CommunicationContext context = CommunicationContext.createServerSocketSSL(Datalink link, int port, string keyStoreFile, string keyStorePassword, string keyPassword, string[] ciphers, string[] protocols)
```

Connection still with sockets, with added security. The POS is the server.

Parameter | Description
--------- | -----------
link | The type of the datalink.
port | The port number.
keyStoreFile | Location to the key store file.
keyStorePassword | The key store password.
keyPassword | The key password.
ciphers | The ciphers that can be used. ex: "ssl_rsa_with_3des_ede_cbc_sha"
protocols | The protocol that can be used. ex: "SSLv3"

## Server HTTP
```java
CommunicationContext context = CommunicationContext.createServerHTTP(Datalink link, int port)
```
```csharp
CommunicationContext context = CommunicationContext.createServerHTTP(Datalink link, int port)
```

Connection that uses HTTP to communicate, being the POS the server.

Parameter | Description
--------- | -----------
link | The type of the datalink.
port | The port number.

## Server HTTPS
```java
CommunicationContext context = CommunicationContext.createServerHTTPS(Datalink link, int port, String keyStoreFile, String keyStorePassword, String keyPassword, String[] ciphers, String[] protocols)
```
```csharp
CommunicationContext context = CommunicationContext.createServerHTTPS(Datalink link, int port, string keyStoreFile, string keyStorePassword, string keyPassword, string[] ciphers, string[] protocols)
```

Connection that now uses HTTPS for added security. The POS is the server.

Parameter | Description
--------- | -----------
link | The type of the datalink.
port | The port number.
keyStoreFile | Location to the key store file.
keyStorePassword | The key store password.
keyPassword | The key password.
ciphers | The ciphers that can be used. ex: "ssl_rsa_with_3des_ede_cbc_sha"
protocols | The protocol that can be used. ex: "SSLv3"

## Com Port
```java
CommunicationContext context = CommunicationContext.createComPort(Datalink link, String comPort, int baudRate, int dataBits, Parity parity, int stopBits, HandShake handshake)
```
```csharp
CommunicationContext context = CommunicationContext.createComPort(Datalink link, string comPort, int baudRate, int dataBits, Parity parity, int stopBits, HandShake handshake)
```

A different type of connection that I don't really know how to describe...

Parameter | Description
--------- | -----------
link | The type of the datalink.
comPort | An id of the com port.
baudRate | Rate that ...
dataBits | The key store password.
parity | The partity can be: NONE, ODD, EVEN, MARK, SPACE
stopBits | Can only be 1 or 2.
HandShake | There are multiples types of Handshakes...

<aside class="warning">
Most likely the parameters or the description itself might not be correct.
</aside>
