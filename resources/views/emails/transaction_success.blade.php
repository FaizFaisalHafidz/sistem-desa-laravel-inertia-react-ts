@php
  if (!function_exists('rupiah')) {
      function rupiah($angka)
      {
          $hasil_rupiah = number_format($angka, 0, ',', '.');
          return $hasil_rupiah;
      }
  }
@endphp
<div style="word-spacing:normal;background-color:#eef4f8">
  <div style="background-color:#eef4f8;width:95%;margin:0px auto">

    <div style="background:#eef4f8;background-color:#eef4f8;margin:0px auto;max-width:600px">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
        style="background:#eef4f8;background-color:#eef4f8;width:100%">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:10px;text-align:center">
              <div style="margin:0px auto;max-width:580px">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                  style="width:100%">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:0px;text-align:center">

                        <div
                          style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                              <tr>
                                <td style="vertical-align:top;padding:0px">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                    width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="center" class="m_-8739241922468664169store-title"
                                          style="font-size:0px;padding:0px;word-break:break-word">
                                          <div
                                            style="margin-bottom:22.5px;margin-top:28.5px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:24px;font-weight:600;line-height:51px;text-align:center;color:#1b2842">
                                            <img style="width: 22px;margin-right: -4px;" type="image"
                                              src="https://flashcode-sandbox.my.id/images/logo/1.svg" alt="">
                                            {{ env('APP_NAME') }}
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>



              <div
                style="background:#ffffff;background-color:#ffffff;border-radius:15px;max-width:580px;width:95%;margin:0px auto">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                  style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:15px">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:0px;text-align:center">

                        <div
                          style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                              <tr>
                                <td style="vertical-align:top;padding:10px">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                    width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="left" style="font-size:0px;padding:0px;word-break:break-word">
                                          <table cellpadding="2px" cellspacing="0" width="100%" border="0"
                                            style="color:#000000;font-family:Poppins,Roboto,'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none">
                                            <tbody>
                                              <tr>
                                                <td colspan="2" style="text-align:center">
                                                  <span class="m_-8739241922468664169status-section-label"
                                                    style="font-size:14px;line-height:21px;color:#8292b0;white-space:nowrap;font-weight:400">
                                                    Tanggal: </span>
                                                  <span class="m_-8739241922468664169status-section-value"
                                                    style="font-size:14px;font-weight:700;line-height:21px;color:#000000">
                                                    {{ $transaction->transaction_time }}
                                                  </span>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td colspan="2" style="text-align:center">
                                                  <span class="m_-8739241922468664169status-section-label"
                                                    style="font-size:14px;font-weight:500;line-height:21px;color:#8292b0;white-space:nowrap">
                                                    Total Pembayaran
                                                  </span>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td colspan="2" style="text-align:center">
                                                  <div class="m_-8739241922468664169txn-amount-value"
                                                    style="font-weight:600;font-size:32px;line-height:48px;color:#0b2852">
                                                    IDR {{ rupiah($transaction->amount) }}
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr style="padding-bottom:10px">
                                                <td style="width:40%">
                                                  <span class="m_-8739241922468664169status-section-label"
                                                    style="font-size:14px;font-weight:500;line-height:21px;color:#8292b0;white-space:nowrap">
                                                    Status transaksi
                                                  </span>
                                                </td>
                                                <td style="text-align:right;width:60%" width="60%" align="right">
                                                  <span class="m_-8739241922468664169txn-status-pill"
                                                    style="background:#4caf50;color:#f8fcff;border:1px solid #4caf50;font-size:14px;font-weight:600;line-height:21px;padding:0px 15px;border-radius:25px">
                                                    &nbsp;Berhasil&nbsp;
                                                  </span>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td style="vertical-align:top" valign="top">
                                                  <span class="m_-8739241922468664169status-section-label"
                                                    style="font-size:14px;font-weight:500;line-height:21px;color:#8292b0;white-space:nowrap">
                                                    ID Pesanan
                                                  </span>
                                                </td>
                                                <td style="text-align:right;vertical-align:top" align="right"
                                                  valign="top">
                                                  <span class="m_-8739241922468664169status-section-value"
                                                    style="font-size:14px;font-weight:700;line-height:21px;color:#000000">
                                                    {{ $transaction->order_id }}
                                                  </span>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td style="vertical-align:top" valign="top">
                                                  <span class="m_-8739241922468664169status-section-label"
                                                    style="font-size:14px;font-weight:500;line-height:21px;color:#8292b0;white-space:nowrap">
                                                    Metode Bayar
                                                  </span>
                                                </td>
                                                <td style="text-align:right;vertical-align:top" align="right"
                                                  valign="top">
                                                  <span class="m_-8739241922468664169status-section-value"
                                                    style="font-size:14px;line-height:21px;color:#000000;font-weight:600">
                                                    {{ strtoupper($transaction->payment_method) }}
                                                  </span>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style="background:#eef4f8;background-color:#eef4f8;margin:0px auto;max-width:580px">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                  style="background:#eef4f8;background-color:#eef4f8;width:100%">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:0px;text-align:center">

                        <div
                          style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                              <tr>
                                <td style="vertical-align:top;padding:0px">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                    width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="font-size:0px;padding:0px;word-break:break-word">
                                          <div style="height:25px;line-height:25px">
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                style="background:#ffffff;background-color:#ffffff;border-radius:15px;max-width:580px;width:95%;margin:0px auto">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                  style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:15px">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:10px;text-align:center">

                        <div
                          style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                              <tr>
                                <td style="vertical-align:top;padding:0px">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                    width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="left" style="font-size:0px;padding:0px;word-break:break-word">
                                          <div
                                            style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;line-height:21px;text-align:left;color:#000000">
                                            Dear <span style="font-weight:700;color:#333333">{{ $user->name }}</span>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="font-size:0px;padding:0px;word-break:break-word">
                                          <div style="height:15px;line-height:15px">
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left" style="font-size:0px;padding:0px;word-break:break-word">
                                          <div
                                            style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:500;line-height:21px;text-align:left;color:#000000">
                                            Terima kasih! Pembayaran Anda
                                            sudah diterima. Silakan lihat
                                            detail pesanan Anda di bawah
                                            ini:</div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="font-size:0px;padding:0px;word-break:break-word">
                                          <div style="height:30px;line-height:30px">
                                          </div>
                                        </td>
                                      </tr>

                                      {{-- <tr>
                                        <td align="left" style="font-size:0px;padding:0px;word-break:break-word">
                                          <div
                                            style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;line-height:21px;text-align:left;color:#000000">
                                            Rincian pembayaran</div>
                                        </td>
                                      </tr>

                                      <tr>
                                        <td align="center"
                                          style="font-size:0px;padding:15px 0px;word-break:break-word">
                                          <p
                                            style="border-top:solid 1px #ebebeb;font-size:1px;margin:0px auto;width:100%">
                                          </p>

                                        </td>
                                      </tr>

                                      <tr>
                                        <td align="left" style="font-size:0px;padding:0px;word-break:break-word">
                                          <table cellpadding="2px" cellspacing="0" width="100%" border="0"
                                            style="color:#000000;font-family:Poppins,Roboto,'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none">
                                            <tbody>
                                              <tr>
                                                <td style="width:40%">
                                                  <div class="m_-8739241922468664169details-label"
                                                    style="color:#000000;font-size:14px;font-weight:600;line-height:21px;text-align:left">
                                                    Total pembayaran
                                                  </div>
                                                </td>
                                                <td style="width:60%">
                                                  <div class="m_-8739241922468664169details-value"
                                                    style="color:#333333;font-size:14px;font-weight:400;line-height:21px;text-align:left">
                                                    IDR {{ rupiah($transaction->amount) }}
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>

                                      <tr>
                                        <td style="font-size:0px;padding:0px;word-break:break-word">
                                          <div style="height:14px;line-height:14px">
                                          </div>
                                        </td>
                                      </tr>

                                      <tr>
                                        <td align="left" style="font-size:0px;padding:0px;word-break:break-word">
                                          <table cellpadding="2px" cellspacing="0" width="100%" border="0"
                                            style="color:#000000;font-family:Poppins,Roboto,'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none">
                                            <tbody>
                                              <tr>
                                                <td style="width:40%">
                                                  <div class="m_-8739241922468664169details-label"
                                                    style="color:#000000;font-size:14px;font-weight:600;line-height:21px;text-align:left">
                                                    Waktu pembayaran
                                                  </div>
                                                </td>
                                                <td style="width:60%">
                                                  <div class="m_-8739241922468664169details-value"
                                                    style="color:#333333;font-size:14px;font-weight:400;line-height:21px;text-align:left">
                                                    21 Januari 2025
                                                    - 08:26:42
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="font-size:0px;padding:0px;word-break:break-word">
                                          <div style="height:30px;line-height:30px">
                                          </div>
                                        </td>
                                      </tr> --}}

                                      <tr>
                                        <td align="left" style="font-size:0px;padding:0px;word-break:break-word">
                                          <div
                                            style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:700;line-height:21px;text-align:left;color:#000000">
                                            Rincian pesanan</div>
                                        </td>
                                      </tr>

                                      <tr>
                                        <td align="center"
                                          style="font-size:0px;padding:15px 0px;word-break:break-word">
                                          <p
                                            style="border-top:solid 1px #ebebeb;font-size:1px;margin:0px auto;width:100%">
                                          </p>

                                        </td>
                                      </tr>

                                      <tr>
                                        <td align="left" style="font-size:0px;padding:0px;word-break:break-word">
                                          <table cellpadding="2px" cellspacing="0" width="100%" border="0"
                                            style="color:#000000;font-family:Poppins,Roboto,'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none">
                                            <tbody>
                                              <tr>
                                                <td style="width:60%">
                                                  <div class="m_-8739241922468664169details-value"
                                                    style="color:#333333;font-size:14px;font-weight:400;line-height:21px;text-align:left">
                                                    {{ $item->name }}
                                                  </div>
                                                </td>
                                                <td style="width:40%">
                                                  <div class="m_-8739241922468664169details-value"
                                                    style="color:#333333;font-size:14px;font-weight:400;line-height:21px;text-align:left">
                                                    IDR {{ rupiah($transaction->amount) }}
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="font-size:0px;padding:0px;word-break:break-word">
                                          <div style="height:14px;line-height:14px">
                                          </div>
                                        </td>
                                      </tr>

                                      <tr>
                                        <td align="center"
                                          style="font-size:0px;padding:10px 0px;word-break:break-word">
                                          <p
                                            style="border-top:solid 1px #ebebeb;font-size:1px;margin:0px auto;width:100%">
                                          </p>

                                        </td>
                                      </tr>

                                      <tr>
                                        <td align="left" style="font-size:0px;padding:0px;word-break:break-word">
                                          <table cellpadding="2px" cellspacing="0" width="100%" border="0"
                                            style="color:#000000;font-family:Poppins,Roboto,'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:100%;border:none">
                                            <tbody>
                                              <tr>
                                                <td style="vertical-align:top;width:60%">
                                                  <div class="m_-8739241922468664169details-label"
                                                    style="color:#000000;font-size:14px;font-weight:600;line-height:21px;text-align:left">
                                                    Total belanja
                                                  </div>
                                                </td>
                                                <td style="vertical-align:top;width:40%">
                                                  <div class="m_-8739241922468664169details-label"
                                                    style="color:#000000;font-size:14px;font-weight:600;line-height:21px;text-align:left">
                                                    IDR {{ rupiah($transaction->amount) }}
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="font-size:0px;padding:0px;word-break:break-word">
                                          <div style="height:30px;line-height:30px">
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style="background:#eef4f8;background-color:#eef4f8;margin:0px auto;max-width:580px">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                  style="background:#eef4f8;background-color:#eef4f8;width:100%">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:0px;text-align:center">

                        <div
                          style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                              <tr>
                                <td style="vertical-align:top;padding:0px">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                    width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="font-size:0px;padding:0px;word-break:break-word">
                                          <div style="height:25px;line-height:25px">
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>



              <div
                style="background:#ffffff;background-color:#ffffff;border-radius:15px;max-width:580px;width:95%;margin:0px auto">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                  style="background:#ffffff;background-color:#ffffff;width:100%;border-radius:15px">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:10px;text-align:center">

                        <div
                          style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                              <tr>
                                <td style="vertical-align:top;padding:0px">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                    width="100%">
                                    <tbody>
                                      <tr>
                                        <td align="left" class="m_-8739241922468664169support-info"
                                          style="font-size:0px;padding:0px;word-break:break-word">
                                          <div
                                            style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;line-height:15px;text-align:left;color:#494a4a">
                                            Untuk informasi lebih lanjut,
                                            silakan hubungi tim support
                                            {{ env('APP_NAME') }} 
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center"
                                          style="font-size:0px;padding:10px 0px;word-break:break-word">
                                          <p
                                            style="border-top:solid 1px #ebebeb;font-size:1px;margin:0px auto;width:100%">
                                          </p>

                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="left" class="m_-8739241922468664169support-promo"
                                          style="font-size:0px;padding:0px;word-break:break-word">
                                          <div
                                            style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:10px;font-weight:400;line-height:12px;text-align:left;color:#4f515c">
                                            Anda mendapat e-mail ini karena
                                            telah bertransaksi di <span
                                              style="font-weight:700">{{ env('APP_NAME') }}</span></div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>




              <div style="background:#eef4f8;background-color:#eef4f8;margin:0px auto;max-width:580px">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                  style="background:#eef4f8;background-color:#eef4f8;width:100%">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:0px;text-align:center">

                        <div
                          style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                              <tr>
                                <td style="vertical-align:top;padding:0px">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                    width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="font-size:0px;padding:0px;word-break:break-word">
                                          <div style="height:25px;line-height:25px">
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>



              <div style="max-width:580px;width:95%;margin:0px auto;margin-bottom:5px">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                  style="width:100%">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:0px;text-align:center">

                        <div
                          style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr">

                          <div
                            style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:42%">
                          </div>

                          <div
                            style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:50%">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                              width="100%">
                              <tbody>
                                <tr>
                                  <td style="vertical-align:middle;padding:0px">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                      width="100%">
                                      <tbody>
                                        
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style="background:#eef4f8;background-color:#eef4f8;margin:0px auto;max-width:580px">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
                  style="background:#eef4f8;background-color:#eef4f8;width:100%">
                  <tbody>
                    <tr>
                      <td style="direction:ltr;font-size:0px;padding:0px;text-align:center">

                        <div
                          style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                              <tr>
                                <td style="vertical-align:top;padding:0px">
                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                    width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="font-size:0px;padding:0px;word-break:break-word">
                                          <div style="height:25px;line-height:25px">
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </td>
          </tr>
        </tbody>
      </table>
      <div class="yj6qo"></div>
      <div class="adL">
      </div>
    </div>
    <div class="adL">

    </div>
  </div>
  <div class="adL">
  </div>
</div>
