<?php

require __dir__ . '/sub-config.php';

include "header.php";

?>

<div class="panel-header bg-primary-gradient">

	<?php section::title( "My Account" ); ?>
	
    <?php section::price_widget(); ?>
	
</div>

<div class="page-inner">

	<div class="row row-card-no-pd mt--2">
	
		<?php 
			
			section::$cardType = 1;
		
			// ---- INVEST CARD ---
			
			section::card(array(
				"title" => "Investment Profit",
				"color" => "success",
				"value" => shares::total_profit( $__user['email'] ) . ' USD',
				"icon" => "fa fa-money"
			));
			
			
			section::card(array(
				"title" => "Total Balance",
				"color" => "primary",
				"value" => round($__user['walletbalance'], 2) . ' USD',
				"icon" => "fa fa-btc"
			));
			
			
			section::card(array(
				"title" => "Referral Bonus",
				"color" => "orange",
				"value" => $__user['refbonus'] . ' USD',
				"icon" => "fa fa-gift"
			));
			
		?>
			
	</div>
	
</div>


<!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener" target="_blank"><span class="blue-text">Financial Markets</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js" async>
  {
  "width": "100%",
  "height": "450",
  "symbolsGroups": [
    {
      "name": "Indices",
      "originalName": "Indices",
      "symbols": [
        {
          "name": "FOREXCOM:SPXUSD",
          "displayName": "S&P 500"
        },
        {
          "name": "FOREXCOM:NSXUSD",
          "displayName": "US 100"
        },
        {
          "name": "FOREXCOM:DJI",
          "displayName": "Dow 30"
        },
        {
          "name": "INDEX:NKY",
          "displayName": "Nikkei 225"
        },
        {
          "name": "INDEX:DEU40",
          "displayName": "DAX Index"
        },
        {
          "name": "FOREXCOM:UKXGBP",
          "displayName": "UK 100"
        }
      ]
    },
    {
      "name": "Futures",
      "originalName": "Futures",
      "symbols": [
        {
          "name": "CME_MINI:ES1!",
          "displayName": "S&P 500"
        },
        {
          "name": "CME:6E1!",
          "displayName": "Euro"
        },
        {
          "name": "COMEX:GC1!",
          "displayName": "Gold"
        },
        {
          "name": "NYMEX:CL1!",
          "displayName": "Crude Oil"
        },
        {
          "name": "NYMEX:NG1!",
          "displayName": "Natural Gas"
        },
        {
          "name": "CBOT:ZC1!",
          "displayName": "Corn"
        }
      ]
    },
    {
      "name": "Bonds",
      "originalName": "Bonds",
      "symbols": [
        {
          "name": "CME:GE1!",
          "displayName": "Eurodollar"
        },
        {
          "name": "CBOT:ZB1!",
          "displayName": "T-Bond"
        },
        {
          "name": "CBOT:UB1!",
          "displayName": "Ultra T-Bond"
        },
        {
          "name": "EUREX:FGBL1!",
          "displayName": "Euro Bund"
        },
        {
          "name": "EUREX:FBTP1!",
          "displayName": "Euro BTP"
        },
        {
          "name": "EUREX:FGBM1!",
          "displayName": "Euro BOBL"
        }
      ]
    },
    {
      "name": "Forex",
      "originalName": "Forex",
      "symbols": [
        {
          "name": "FX:EURUSD",
          "displayName": "EUR/USD"
        },
        {
          "name": "FX:GBPUSD",
          "displayName": "GBP/USD"
        },
        {
          "name": "FX:USDJPY",
          "displayName": "USD/JPY"
        },
        {
          "name": "FX:USDCHF",
          "displayName": "USD/CHF"
        },
        {
          "name": "FX:AUDUSD",
          "displayName": "AUD/USD"
        },
        {
          "name": "FX:USDCAD",
          "displayName": "USD/CAD"
        }
      ]
    }
  ],
  "showSymbolLogo": true,
  "colorTheme": "dark",
  "isTransparent": false,
  "locale": "en"
}
  </script>
</div>
<!-- TradingView Widget END -->


<?php include 'footer.php'; ?>

