import React from 'react'

export const Pembayaran = () => {
    return (
        <div style={{ marginTop: '21px', marginBottom: '30px', width: '80%', display: 'flex', justifyContent: 'space-between' }}>
            <img
                style={{
                    'minWidth': '100px', 'maxWidth': '140px', height: '60px', objectFit: 'cover', borderRadius: '9 % '
                }}
                src={'https://seeklogo.com/images/A/alfamart-logo-13EE0761D0-seeklogo.com.png'}
            />
            <img
                style={{ 'minWidth': '100px', 'maxWidth': '140px', height: '60px', objectFit: 'cover', borderRadius: '9%' }}
                src={'https://upload.wikimedia.org/wikipedia/id/0/04/Logo_Indomaret.svg'}
            />
            <img
                style={{ 'minWidth': '100px', 'maxWidth': '140px', height: '60px', objectFit: 'cover', borderRadius: '9%' }}
                src={'https://a.m.dana.id/danaweb/web/dana-meta-logo.png'}
            />
        </div>
    );
}
