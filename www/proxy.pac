function FindProxyForURL(url,host)

{

    // Access the internet directly for one site

    if (dnsDomainIs(host, "cacko.net")) {

        return "DIRECT";

    }

    // No proxy for private (RFC 1918) IP addresses (intranet sites)

    if (isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {

         return "DIRECT";

    }

    // No proxy for localhost

    if (isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0")) {

        return "DIRECT";

    }

    // Clean-up rule. Everything else uses a proxy. Note semi-colon delimiter between strings.

    return "PROXY 192.168.0.254:8118; DIRECT";

}
