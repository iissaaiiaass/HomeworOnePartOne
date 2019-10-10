<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
            </head>
            <body>
                <h2>Textbook Collection</h2>
                <table border="1">
                    <tr bgcolor="#1ad1ff">
                        <th>Title</th>
                        <th>Authors</th>
                        <th>Publisher</th>
                        <th>Publication Year</th>
                        <th>ISBN</th>
                        <th>Website</th>
                        <th>Edition</th>
                        <th>Cover</th>
                    </tr>
                    <xsl:for-each select="books/textbook">
                        <tr>
                            <td><xsl:value-of select="title"/></td>
                            <td>
                                <xsl:for-each select="author">
                                    <xsl:value-of select="name"/><xsl:value-of select="lastName"/><br/>
                                </xsl:for-each>
                            </td>
                            <td><xsl:value-of select="publisher"/></td>
                            <td><xsl:value-of select="publicationYear"/></td>
                            <td><xsl:value-of select="ISBN"/></td>
                            <xsl:choose>
                                <xsl:when test="specialWebsite/text()">
                                    <td><xsl:value-of select="specialWebsite"/></td>
                                </xsl:when>
                                <xsl:otherwise>
                                    <td>N/A</td>
                                </xsl:otherwise>
                            </xsl:choose>
                            <td><xsl:value-of select="edition"/></td>
                            <td><xsl:value-of select="coverType"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>