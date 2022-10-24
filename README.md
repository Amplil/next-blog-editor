# ブロッキング回路の原理
## モデルの定義
下図のように各点での電圧値および電流値を考えます（回路図のベクトルの向きはすべて上向きにしました。また、記号法を使いたいところですが、今回は正弦波交流回路ではないため、使うことができません。）。
![](https://res.cloudinary.com/ideatech/image/upload/v1650407237/%E3%83%96%E3%83%AD%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E7%99%BA%E6%8C%AF%E5%9B%9E%E8%B7%AF_%E9%9B%BB%E6%B5%81%E3%81%82%E3%82%8A_uhr5jw.png)

ここで、自己インダクタンス$$L_1, L_2$$の2つのコイルは理想トランスであり、巻数比を$$n:1$$、結合係数を$$k$$とすると、トランスの条件式は、
$$
\begin{cases}
L_1=L_2=L \\
n=1 \\
k=1
\end{cases}
$$
であるとします。また、トランジスタ$$T_r$$は直流電流増幅率$$h_{FE}$$、C-E間飽和電圧$$V_{CE(SAT)}$$、B-E間順方向電圧$$V_{BE}$$の3つの独立な定数のみで定義します。
## ブロッキング回路のポイント
### コイルの相対極性
コイルの端子にある丸印はコイルの巻き始め（別に巻き終わりでもいい）を表しており、つまりコイルの相対的な極性を表現しています。

上の回路図では、自己インダクタンス$$L_1, L_2$$の2つのコイルが、相互インダクタンス$$M$$で、差動的に結合しているので、$$ v_{L1}(t),v_{L2}(t) $$は、
$$
\begin{cases}
v_{L1}(t)&=&L_1 \frac{di_{L1}(t)}{dt}-M \frac{di_{L2}(t)}{dt} \\
v_{L2}(t)&=&L_2 \frac{di_{L2}(t)}{dt}-M \frac{di_{L1}(t)}{dt} \\
\end{cases}
$$
ここで$$M$$と$$L_1, L_2$$の関係は、
$$
M=k \sqrt{L_1 L_2}
$$
\eqref{trans-condition}の条件式から、
$$
M=L
$$
となるので、
$$
\begin{cases}
v_{L1}(t)&=&L \frac{di_{L1}(t)}{dt}-L \frac{di_{L2}(t)}{dt} \\
v_{L2}(t)&=&L \frac{di_{L2}(t)}{dt}-L \frac{di_{L1}(t)}{dt}\\
\end{cases}
$$
よって、
$$
v_{L1}(t)=-v_{L2}(t) \label{vl1vl2}
$$
が成り立ちます。すなわち、理想トランスの場合、2つのコイルの電圧は互いに逆相であるということです（巻数比が1:1でない場合も式の中に$$n$$が入りますが逆相の関係となります。$$ v_{L1}(t),v_{L2}(t) $$ のどちらかのベクトルを逆向きにとると、同相ということになりますが、これは差動的結合の表記を無視した式になります）。また、今回の場合、正弦波交流回路でないため、この逆相の関係は電流に対しては成り立ちません（1次側で直流電流が流れていても、2次側で誘導起電力が発生しないことからも成り立たないことがわかります）。
たとえば、コイルL2の丸印から流れ出る方向に電流が流れた場合、$$T_r$$にベース電流が流れるため、$$T_r$$がONとなり、コイルL1の丸印端子に電流が入り込む方向に電流が流れますが、これは全く逆相でない動きです。
### コイルの充電とトランジスタの特性
$$T_r $$がオンである間、$$T_r $$のコレクタに接続されたコイルL1に電流が流れる訳ですが、コイルの特性から電流は積分値となります。この場合は定電圧印加なので直線的にコイル電流が増えて行く（コイルに充電されて行く）ことになります。コイルはずっとこの調子で電流を増やして行きたいのですが、トランジスタ$$T_r $$の都合でそうは行かなくなるのです。それはベース電流にトランジスタ固有の電流増幅率$$h_{FE} $$を掛け算した値以上のコレクタ電流を流すことが出来ないというトランジスタの根本的特性から来る都合なのです。
次にトランスの基本特性を考えます。トランスは電磁誘導作用により1次コイルL1から2次コイルＬ２にエネルギーを伝達する訳ですが、電磁誘導は磁束の変化がなければ作用しません。つまりコイルL1の電流変化（電流の増大）が止まれば、上のグラフからも分かるようにコイルL2の起電圧は無くなります。これにより有限時間の充電プロセスが生成されるわけです。
このようにトランジスタの特性とコイル（トランス）の特性とのコラボレーションにより生成される有限時間の充電プロセスと何らかの放電プロセスを繰り返すことによりブロッキング発振回路が成立しています。これがブロッキング発振回路の動作を理解する上ではとても重要なことです。

## 式の導出
ここからは回路方程式から$$v_2(t)$$の式を導いたあと、$$T_r= \textrm{ON} $$  期間（充電プロセス）と$$T_r= \textrm{OFF} $$  期間（放電プロセス）に分けて考えていきます。
### 回路方程式

上の回路図から、次式が導かれる。
$$
\begin{cases}
V_{CC}&=&v_{L1}(t)+v_1(t) \\
V_{CC}&=&v_{L2}(t)+v_2(t) \\
\end{cases}
$$
よって
$$
\begin{cases}
v_2(t)&=&V_{CC}-v_{L2}(t)\\
&=&V_{CC}+v_{L1}(t) \label{v2t<-v1t} \\
&=&V_{CC}+V_{CC}-v_1(t) \\
&=&2V_{CC}-v_1(t)\\
\end{cases}
$$

### $$T_r= \textrm{ON} $$  期間（充電プロセス）
$$T_r= \textrm{ON} $$  期間（$$T_1$$期間）において、はじめにコイルに蓄えられる電流値$$I_c$$を考える。

コイルの基本式より
$$
I_c=\frac{1}{L} \int_{0}^{T_1} v_{L1}(t) dt
$$
また、
$$
v_{L1}(t)=V_{CC}-V_{CE(SAT)}\label{vl1thalf}
$$
であり、時間によらず一定値であるので、
$$
\begin{cases}
I_c&=&\frac{1}{L} \int_{0}^{T_1} (V_{CC}-v_{CE(SAT)})dt \notag \\
&=&\frac{V_{CC}-V_{CE(SAT)}}{L}\int_{0}^{T_1} dt \notag \\
&=&\frac{V_{CC}-V_{CE(SAT)}}{L}\cdot T_1 \label{iccoil}
\end{cases}
$$
となる。

次にトランジスタ$$T_r$$からみた電流値の限界である$$I_c$$は、

$$\eqref{vl1vl2},\eqref{vl1thalf}$$式より、
$$
\begin{equation}
v_{L2}(t)=-(V_{CC}-V_{CE(SAT)}) \label{vl2t}
\end{equation}
$$
$$T_r$$のベースに流れる電流$$I_b$$は
$$
I_b=\frac{V_{CC}-v_{L2}(t)-V_{be}}{R_b}
$$
だから、\eqref{vl2t}式を代入して、
$$
I_b=\frac{2V_{CC}-V_{CE(SAT)}-V_{be}}{R_b} \label{Ib}
$$
$$T_r$$が$${\small \textrm{ON}}$$時であり、
$$V_{CE(SAT)}\ll \textrm{LED} $$の順方向電圧なので、$$R_c$$に流れる電流は無視できるため、$$T_r$$の特性より、
$$
I_c=h_{FE}\cdot I_b \label{Ic}
$$


\eqref{Ib},\eqref{Ic}式より
$$
I_c=h_{FE}\cdot \frac{2V_{CC}-V_{CE(SAT)}-V_{be}}{R_b} \label{ictr}
$$

よって \eqref{iccoil}, \eqref{ictr}式から、$$T_1$$は、
$$
T_1=h_{FE}\cdot\frac{L}{R_b} \cdot \frac{2V_{CC}-V_{CE(SAT)}-V_{BE}}{V_{CC}-V_{CE(SAT)}}
$$
また、


$$
\begin{cases}
V_{CE(SAT)} \simeq 0 \label{approximation} \\
V_{BE} \simeq 0
\end{cases}
$$
と近似した場合、

\eqref{ictr}式から、
$$
I_c \simeq h_{FE}\cdot \frac{2V_{CC}}{R_b}
$$
\eqref{t1}式から、
$$
T_1 \simeq h_{FE}\cdot \frac{2L}{R_b} \label{t1}
$$
となる。
このようにコイルに蓄積出来る有限電流値$$I_c$$および有限時間$$T_1$$が生成される。

### $$T_r= \textrm{OFF} $$  期間（放電プロセス）
$$T_r= \textrm{ON} $$  期間（$$T_1$$期間）にてコイルにチャージした電流$$I_c$$を抵抗$$R_c$$及び(LED)に供給する期間を考える。
つまり$$T_r= \textrm{OFF} $$になった瞬間からのかと応答を考えればよく、ラプラス演算子sを用いたウラ回路で表現する（s領域で考える）。
$$T_r= \textrm{OFF} $$となったときを時間原点$$t=0$$とし、コイルは電流出力なので、過渡応答に無関係な（定常な）LED順方向電圧は無視できる（0（ショート）と考える）。

$$
s L_1 // R_c = \frac{1}{\frac{1}{s L_1}+\frac{1}{R_c}}=\frac{s L_1 \cdot R_c}{s L_1 + R_c}
$$
だから、
$$
\begin{cases}
v_{L1}(s) &=& \frac{I_c}{s} \cdot (s L_1 // R_c) \notag \\
&=& \frac{I_c}{s} \cdot \frac{s L_1 \cdot R_c}{s L_1 + R_c} \notag \\
&=& I_c \cdot R_c \cdot \frac{L_1}{s L_1 + R_c} \notag \\
&=& I_c \cdot R_c \cdot \frac{1}{s + \frac{R_c}{L_1}} \label{vl1s}
\end{cases}
$$
ここで、
$$
\frac{1}{s+ \alpha} \leftrightharpoons e^{-\alpha t}
$$
だから、
\eqref{vl1s}式を逆ラプラス変換して時間領域に戻すと
$$ v_{L1}(t)=I_c \cdot R_c \cdot e^{-\frac{R_c}{L_1}t} \label{vl1t} $$
となる。
$$
\begin{cases}
v_{L1(MAX)} &=& I_c \cdot R_c \notag \\
&=& h_{FE} \cdot (2V_{CC}-V_{CE(SAT)}-V_{BE}) \cdot \frac{R_c}{R_b} \\
\end{cases}
$$

\eqref{approximation}式の近似を用いると、
$$
v_{L1(MAX)} \simeq 2 h_{FE} \cdot V_{CC} \cdot \frac{R_c}{R_b}
$$

次に電磁誘導（トランス結合）によってコイル$$L_2$$に誘起する電圧 $$v_{L2}(t)$$ と $$v_{2}(t)$$ を考える。

\eqref{v2t<-v1t}式に\eqref{vl1t}式を代入して、
$$
v_{2}(t)=V_{CC}-I_c \cdot R_c \cdot e^{-\frac{R_c}{L_1}t}
$$
となる。

ただし、$$L_1$$に流れる電流$$ \ \gg L_2$$に流れる電流と考えて、$$L_2$$から$$L_1$$への影響（誘導）は無視している。


さて$$T_r$$がオンする条件は概ね$$ v_{2}(t) \gg V_{BE}$$と考えると、
$$
v_{2}(t) = V_{BE}
$$
上式より
\[I_c \cdot R_c e^{-\frac{R_c}{L}t_2}=V_{CC}-V_{BE}\]
$$t_2$$を求めると
$$
\begin{cases}
e^{-\frac{R_c}{L}t_2}&=&\frac{V_{CC}-V_{BE}}{I_c \cdot R_c} \notag\\
e^{\frac{R_c}{L}t_2}&=&\frac{I_c \cdot R_c}{V_{CC}-V_{BE}} \notag\\
\frac{R_c}{L} \cdot t_2&=&ln(\frac{I_c \cdot R_c}{V_{CC}-V_{BE}}) \notag\\
t_2 &=& \frac{L}{R_c}ln(\frac{I_c \cdot R_c}{V_{CC}-V_{BE}})
\end{cases}
$$
よって
$$
T_2=\frac{L}{R_c}ln(h_{FE}\cdot \frac{R_c}{R_b}\cdot \frac{2V_{CC}-V_{CE(SAT)}-V_{BE}}{V_{CC}-V_{BE}})
$$
\eqref{approximation}式の近似を用いると、
$$
T_2\simeq \frac{L}{R_c}ln(2\cdot h_{FE}\cdot \frac{R_c}{R_b})
$$
となる。

最後に発振周期$$T$$を求める。
$$
T=T_1+T_2
$$
だから
$$
\begin{cases}
T=h_{FE}\cdot \frac{L}{R_b}\cdot \frac{2V_{CC}-V_{CE(SAT)}-V_{BE}}{V_{CC}-V_{BE}} \notag \\
+\frac{L}{R_c}ln(h_{FE}\cdot \frac{R_c}{R_b}\cdot \frac{2V_{CC}-V_{CE(SAT)}-V_{BE}}{V_{CC}-V_{CE(SAT)}})
\end{cases}
$$
である。
また、$$\eqref{approximation}$$式の近似を用いると、
$$
T \simeq 2h_{FE}\cdot \frac{L}{R_b}+\frac{L}{R_c}ln(2h_{FE}\cdot \frac{R_c}{R_b})
$$
である。